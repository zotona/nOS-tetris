// @flow
import { descend, prop, sortBy } from "ramda";
import React from "react";

import { Title, TopScoresList } from "./styled";
import ScoreItem from "./ScoreItem";
import type { TopScore } from "../../types";

type Props = {
  topScores: TopScore[],
  playerScore: number
};
export default ({ topScores, playerScore }: Props) => (
  <TopScoresList>
    <Title>Top Score</Title>
    {sortBy(
      descend(prop("score")),
      topScores.concat({ name: "Me", score: playerScore })
    ).map(item => (
      <ScoreItem name={item.name} score={item.score} key={item.name} />
    ))}
  </TopScoresList>
);
