// @flow

import styled from "styled-components";

export const GameInfoSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Score = styled.div``;

export const ScoreLabel = styled.div`
  margin-top: 50px;
  color: white;
  font-size: 48px;
`;

export const ScoreValue = styled.div`
  color: white;
  font-size: 130px;
  font-size: bold;
  text-align: center;
`;

export const PauseButton = styled.button`
  transition: all 0.15s linear 0s;
  background-color: ${props =>
    props.active
      ? props.theme.colors.buttonBackgroundActive
      : props.theme.colors.buttonBackground};
  border: none;
  border-radius: 10px;
  color: ${props => (props.active ? "black" : "white")};
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 30px;
  width: 220px;
  &:hover {
    background-color: ${props =>
      props.active
        ? props.theme.colors.buttonBackgroundHover
        : props.theme.colors.buttonBackgroundHoverActive};
    cursor: pointer;
  }
  &:disabled {
    background-color: ${props => props.theme.colors.buttonBackgroundDisabled};
    cursor: not-allowed;
  }
`;

export const TopScoresList = styled.div`
  color: white;
`;

export const Title = styled.h1``;

export const ScoreItemSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

ScoreItemSC.Name = styled.div``;
ScoreItemSC.Score = styled.div``;
