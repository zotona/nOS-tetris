// @flow

import * as React from "react";
import { InnerContainer, Modal, StartButton, Text } from "./styled";

type Props = {
  loading: boolean,
  onClick: () => any
};
export default ({ loading, onClick }: Props) => (
  <Modal>
    <InnerContainer>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <StartButton onClick={onClick}>Start Game</StartButton>
      )}
    </InnerContainer>
  </Modal>
);
