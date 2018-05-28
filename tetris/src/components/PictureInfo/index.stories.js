import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { GameInfo } from "./";

storiesOf("GameInfo", module)
  .addDecorator(withKnobs)

  .add("Default", () => {
    const picture = {
      id: 1,
      url: "http://placebear.com/200/200",
      author: "John Doe1",
      timestamp: new Date(),
      tag: "nature",
      category: "red"
    };
    return <GameInfo picture={picture} playerScore={10} />;
  });
