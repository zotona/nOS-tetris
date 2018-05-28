// @flow

import * as React from "react";

import {
  GameInfoSC,
  PauseButton,
  Score,
  ScoreLabel,
  ScoreValue
} from "./styled";
import TopScores from "./TopScores";
import type { GameState, TopScore } from "../../types";

type Props = {
  playerScore: number,
  topScores: TopScore[],
  gameState: GameState,
  onGameStartClick: () => any,
  onGamePauseClick: () => any
};

export default ({
  playerScore,
  topScores,
  gameState,
  onGameStartClick,
  onGamePauseClick
}: Props) => {
  const showPauseGameButton = gameState === "RUNNING";

  const showResumeGameButton = gameState === "PAUSED";
  const showNewGameButton = gameState === "ENDED";

  return (
    <GameInfoSC>
      <Score>
        <ScoreLabel>SCORE</ScoreLabel>
        <ScoreValue>{playerScore}</ScoreValue>
      </Score>

      {showPauseGameButton && (
        <PauseButton onClick={onGamePauseClick}>Pause</PauseButton>
      )}
      {showResumeGameButton && (
        <PauseButton active onClick={onGamePauseClick}>
          Continue
        </PauseButton>
      )}
      {showNewGameButton && (
        <PauseButton active onClick={onGameStartClick}>
          New Game{" "}
        </PauseButton>
      )}
      <TopScores topScores={topScores} />
    </GameInfoSC>
  );
};
