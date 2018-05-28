import styled from "styled-components";
import tilesImg from "./tiles.png";

export const Modal = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  position: absolute;
  z-index: 2;
  padding: 50px 100px;
  transform: translate(-50%, -50%);

  color: rgba(0, 0, 0, 0.7);
  box-shadow: rgba(0, 0, 0, 0.1) 10px 5px 6px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 4px;
`;

export const InnerContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  background-image: url(${tilesImg});
  background-repeat: no-repeat;
  background-position-y: 20%;
  background-position-x: center;
  width: 12em;
  height: 12em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1em;
`;

export const Text = styled.div`
  color: white;
  text-align: center;
  padding: 20px 0;
`;

export const StartButton = styled.button`
  transition: all 0.15s linear 0s;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 6px;
  padding: 5px 20px;
  margin: 1em;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }
`;
