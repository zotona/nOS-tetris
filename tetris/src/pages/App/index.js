//@flow
import * as React from "react";
import { AutoSizer } from "react-virtualized";

import {
  type BucketPicture,
  type GameState,
  type Picture,
  type TopScore
} from "../../types";
import {
  GAME_FIELD_WIDTH,
  Keys,
  NEXT_TICK_DELAY,
  TAGS_TO_LOAD
} from "../../constants";
import { Game, GameFieldContainer } from "./styled";
import { apiGetPictures } from "../../api";
import { apiGetTopScores, apiSaveHighScore } from "../../api/nos";
import {
  calcPictureSize,
  canDisappear,
  getLowestY,
  isMoveAllowed,
  updateFallingBlocks
} from "../../helpers";
import GameField from "../../components/GameField";
import GameInfo from "../../components/GameInfo";
import Loading from "../../components/Loading";
import PictureInfo from "../../components/PictureInfo";
import UsernamePopup from "./UsernamePopup";

type Props = {};
type State = {
  username: ?string,
  unseenPictures: Picture[],
  bucket: BucketPicture[],
  playerScore: number,
  topScores: TopScore[],
  currentPicture: ?BucketPicture,
  gameState: GameState,
  dx: number,
  fall: boolean
};
export default class App extends React.Component<Props, State> {
  timer: IntervalID;
  state = {
    username: null,
    unseenPictures: [],
    bucket: [],
    playerScore: 0,
    topScores: [],
    currentPicture: null,
    gameState: "PICTURES_NOT_LOADED",
    dx: 0,
    fall: false
  };
  bindKeys() {
    window.addEventListener("keydown", this.handleKeys);
  }

  unbindKeys() {
    window.removeEventListener("keydown", this.handleKeys);
  }
  loadPicturesForTag = (tag: string) =>
    apiGetPictures(tag).then(pictures =>
      this.setState(prevState => ({
        unseenPictures: prevState.unseenPictures.concat(pictures),
        gameState:
          prevState.gameState === "PICTURES_NOT_LOADED"
            ? "NOT_STARTED"
            : prevState.gameState
      }))
    );
  loadPictures = () => {
    TAGS_TO_LOAD.forEach(this.loadPicturesForTag);
  };

  loadTopScores = () => {
    apiGetTopScores().then(topScores => this.setState({ topScores }));
  };

  componentDidMount() {
    this.loadPictures();
    this.loadTopScores();
    this.bindKeys();
  }
  componentWillUnmount() {
    this.unbindKeys();
  }
  handleKeys = e => {
    switch (e.keyCode) {
      case Keys.LEFT:
        this.handleNextTick(-1);
        break;
      case Keys.RIGHT:
        this.handleNextTick(1);
        break;
      case Keys.SPACE:
        if (
          this.state.gameState === "RUNNING" ||
          this.state.gameState === "PAUSED"
        ) {
          this.handlePauseGame();
        }
        break;
      case Keys.DOWN:
        this.handleNextTick(0, true);
        break;
      default:
    }
  };
  componentDidUpdate(prevProps: Props, prevState: State) {
    // Так прикольней, не надо отдельно вызывать процедуры
    if (
      this.state.gameState === "RUNNING" &&
      prevState.gameState !== "RUNNING"
    ) {
      //start timer
      this.timer = setInterval(this.handleNextTick, NEXT_TICK_DELAY);
    } else if (
      this.state.gameState !== "RUNNING" &&
      prevState.gameState === "RUNNING"
    ) {
      //stop timer
      clearInterval(this.timer);
    }
  }
  fetchNextPicture = () => {
    if (this.state.unseenPictures.length === 0) {
      this.setState({ gameState: "ENDED" });
    }
    const currentPicture = this.state.unseenPictures[0];
    const unseenPictures = this.state.unseenPictures.slice(1);
    if (unseenPictures.length < 3) {
      this.loadPictures();
    }
    const nextPicture = {
      ...currentPicture,
      position: { x: Math.ceil(GAME_FIELD_WIDTH / 2) - 1, y: 0 }
    };

    return {
      currentPicture: nextPicture,
      unseenPictures
    };
  };
  handleNextTick = (dx: ?number, fall: ?boolean) => {
    if (this.state.gameState !== "RUNNING") {
      return;
    }
    this.setState(prevState => {
      const currentPicture = prevState.currentPicture;
      let nextState = { dx: 0 };

      if (currentPicture != null) {
        let dy = dx == null ? 1 : 0;
        if (fall) {
          const lowestY = getLowestY(prevState.bucket, currentPicture);
          dy = lowestY - currentPicture.position.y;
        }
        const nextPosition = {
          x: currentPicture.position.x + (dx != null ? dx : 0),
          // Если dx != null, то метод вызван из обработчика клавитуры, время падения еще не наступило.
          y: currentPicture.position.y + dy
        };
        if (nextPosition.x < 0) {
          nextPosition.x = 0;
        }
        if (nextPosition.x >= GAME_FIELD_WIDTH) {
          nextPosition.x = GAME_FIELD_WIDTH - 1;
        }

        if (isMoveAllowed(this.state.bucket, nextPosition)) {
          const newPicture = {
            ...currentPicture,
            position: nextPosition
          };
          nextState = { ...nextState, currentPicture: newPicture };
        } else {
          const disappearingPictures = canDisappear(
            prevState.bucket,
            currentPicture
          );
          if (disappearingPictures.length > 0) {
            let newBucket = prevState.bucket.filter(
              p => !disappearingPictures.includes(p)
            );

            newBucket = updateFallingBlocks(newBucket);

            nextState = {
              ...nextState,
              ...this.fetchNextPicture(),
              bucket: newBucket,
              playerScore: prevState.playerScore + disappearingPictures.length
            };
            this.loadTopScores();
          } else if (nextPosition.y === 1) {
            //падать некуда, уже на вершине стакана, конец игры
            nextState = {
              ...nextState,
              gameState: "ENDED",
              currentPicture: null
            };
            if (this.state.username) {
              apiSaveHighScore(this.state.username, this.state.playerScore);
            }
          } else {
            nextState = {
              ...nextState,
              bucket: prevState.bucket.concat(currentPicture),
              ...this.fetchNextPicture()
            };
          }
        }
      }
      return nextState;
    });
  };

  handleStartGame = () => {
    this.setState({ gameState: "RUNNING" });
    if (this.state.currentPicture == null) {
      this.setState(this.fetchNextPicture());
      this.setState({ bucket: [], playerScore: 0 });
    }
  };

  handlePauseGame = () => {
    if (this.state.gameState === "NOT_STARTED") {
      this.handleStartGame();
    } else {
      this.setState(({ gameState }) => ({
        gameState: gameState === "PAUSED" ? "RUNNING" : "PAUSED"
      }));
    }
  };
  updateUsernameAndSubmitScore = ({ username }: { username: string }) => {
    this.setState({ username });
    apiSaveHighScore(username, this.state.playerScore);
  };
  render() {
    const showLoading =
      this.state.gameState === "PICTURES_NOT_LOADED" ||
      this.state.gameState === "NOT_STARTED";

    if (showLoading) {
      return (
        <Game>
          <Loading
            loading={this.state.gameState === "PICTURES_NOT_LOADED"}
            onClick={this.handleStartGame}
          />
        </Game>
      );
    }
    const showUsernamePopup =
      this.state.gameState === "ENDED" && this.state.username == null;
    if (showUsernamePopup) {
      return (
        <Game>
          <UsernamePopup onUsernameSet={this.updateUsernameAndSubmitScore} />
        </Game>
      );
    }
    return (
      <Game>
        {
          <React.Fragment>
            <PictureInfo
              picture={this.state.currentPicture}
              playerScore={this.state.playerScore}
              gameState={this.state.gameState}
              onGameStartClick={this.handleStartGame}
              onGamePauseClick={this.handlePauseGame}
            />
            <GameFieldContainer>
              <AutoSizer>
                {({ height, width }) => (
                  <GameField
                    pictureSize={calcPictureSize(width, height)}
                    bucket={this.state.bucket}
                    currentPicture={this.state.currentPicture}
                  />
                )}
              </AutoSizer>
            </GameFieldContainer>
            <GameInfo
              playerScore={this.state.playerScore}
              topScores={this.state.topScores}
              gameState={this.state.gameState}
              onGameStartClick={this.handleStartGame}
              onGamePauseClick={this.handlePauseGame}
            />
            {/*            <button onClick={() => this.setState({ gameState: "ENDED" })}>
              END!
            </button>*/}
          </React.Fragment>
        }
      </Game>
    );
  }
}
