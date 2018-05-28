// @flow
import * as React from "react";
import { type BucketPicture } from "../../types";
import { PictureStyled } from "./styled";

type Props = { picture: BucketPicture, pictureSize: number };

export default ({
  pictureSize,
  picture: { images, category, position: { x, y } }
}: Props) => (
  <PictureStyled
    url={images.thumbnail.url}
    category={category}
    x={x}
    y={y}
    pictureSize={pictureSize}
  />
);
