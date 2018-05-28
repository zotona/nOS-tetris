// @flow

import styled from "styled-components";

import { GAME_FIELD_HEIGHT, GAME_FIELD_WIDTH } from "../../constants";

export const Container = styled.div`
  position: relative;
  height: ${props => GAME_FIELD_HEIGHT * props.pictureSize}px;
  width: ${props => GAME_FIELD_WIDTH * props.pictureSize}px;
  border-left: 5px solid grey;
  border-right: 5px solid grey;
  border-bottom: 5px solid grey;
  background-color: rgba(255, 255, 255, 0.2);
`;
// height: ${props => GAME_FIELD_HEIGHT * props.pictureSize}px;
//   width: ${props => GAME_FIELD_WIDTH * props.pictureSize}px;

// grid-template-columns: repeat(
//   ${GAME_FIELD_WIDTH},
//   ${props => props.pictureSize}px
// );
// grid-template-rows: repeat(
//   ${GAME_FIELD_HEIGHT},
//   ${props => props.pictureSize}px
// );
// grid-column-gap: 0px;
// grid-row-gap: 0px;
