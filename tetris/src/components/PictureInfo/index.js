// @flow

import * as React from "react";
import { take } from "ramda";

import { CategoryPlaceholder, Container, Image, ImageInfo } from "./styled";
import type { GameState, Picture } from "../../types";

type Props = {
  picture: ?Picture,
  gameState: GameState,
  playerScore: number,
  onGameStartClick: () => any,
  onGamePauseClick: () => any
};

export default class GameInfo extends React.Component<Props> {
  render() {
    const { picture } = this.props;

    return (
      <Container>
        {picture != null && (
          <ImageInfo>
            <Image
              src={picture.images.standard_resolution.url}
              category={picture.category}
              alt={`picture, category ${picture.category}`}
            />
            <div>Author: {picture.user && picture.user.username} </div>
            <div>
              Date: {new Date(+picture.created_time * 1000).toLocaleString()}{" "}
            </div>
            <div>
              Category: <CategoryPlaceholder category={picture.category} />{" "}
            </div>
            <div>
              Tags: {take(6, picture.tags).join(", ")}
              {picture.tags.length > 6 ? "..." : null}
            </div>
          </ImageInfo>
        )}
      </Container>
    );
  }
}
