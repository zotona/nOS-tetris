// @flow
import styled from "styled-components";
import wall from "./wall.jpg";

export const Game = styled.div`
  margin: auto;
  background-image: url(${wall});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
`;

export const GameFieldContainer = styled.div`
  width: 30%;
  height: 100vh;
`;
