import { BORDER_SIZE } from "../../constants";
import styled from "styled-components";

export const PictureStyled = styled.div`
  background-image: url(${props => props.url});
  border: 3px solid ${props => props.category};
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => props.pictureSize - BORDER_SIZE - 1}px;
  height: ${props => props.pictureSize - BORDER_SIZE - 1}px;
  position: absolute;
  top: ${props => props.y * props.pictureSize}px;
  left: ${props => props.x * props.pictureSize}px;
  transition: 0.3s;
`;
// grid-column: ${props => props.x + 1} / ${props => props.x + 2};
// grid-row: ${props => props.y + 1} / ${props => props.y + 2};
