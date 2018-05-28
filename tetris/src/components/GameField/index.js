// @flow
import * as React from "react";
import { Container } from "./styled";
import { Transition, TransitionGroup } from "styled-transition-group-animation";
import BucketPicture from "../BucketPicture";
import type { BucketPicture as BucketPictureType } from "../../types";

type Props = {
  bucket: BucketPictureType[],
  currentPicture: ?BucketPictureType,
  pictureSize: number
};

export default class GameField extends React.Component<Props> {
  render() {
    return (
      <Container pictureSize={this.props.pictureSize}>
        <TransitionGroup className="tg">
          {this.props.bucket.map(picture => (
            <Transition key={picture.id} duration={1000}>
              <BucketPicture
                picture={picture}
                pictureSize={this.props.pictureSize}
              />
            </Transition>
          ))}
          {this.props.currentPicture && (
            <Transition key={this.props.currentPicture.id} duration={1000}>
              <BucketPicture
                picture={this.props.currentPicture}
                pictureSize={this.props.pictureSize}
              />
            </Transition>
          )}
        </TransitionGroup>
      </Container>
    );
  }
}
