import { PREVIEW_PICTURE_SIZE } from "../../constants";
import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20vh;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Image = styled.img`
  width: ${PREVIEW_PICTURE_SIZE}px;
  height: ${PREVIEW_PICTURE_SIZE}px;
  border: 5px solid ${props => props.category};
  border-radius: 5px;
  margin-top: 1em;
  margin-left: 1em;
`;

export const ImageInfo = styled.div`
  color: ${props => props.theme.colors.mainText};
  & > div {
    padding: 10px 20px;
  }
`;

export const Button = styled.button`
  padding: 5px 20px;
`;

export const CategoryPlaceholder = styled.div`
  background-color: ${props => props.category};
  width: 50px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
`;
