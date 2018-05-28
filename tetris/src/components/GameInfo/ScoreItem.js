// @flow

import React from "react";

import { ScoreItemSC } from "./styled";
import type { TopScore } from "../../types";

type Props = TopScore;
export default ({ name, score }: Props) => (
  <ScoreItemSC>
    <ScoreItemSC.Name>{name}</ScoreItemSC.Name>
    <ScoreItemSC.Score>{score}</ScoreItemSC.Score>
  </ScoreItemSC>
);
