import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { GameField } from "./";

storiesOf("GameField", module)
  .addDecorator(withKnobs)

  .add("Default", () => {
    const bucket = [
      {
        id: 1,
        url: "http://placebear.com/200/200",
        author: "John Doe1",
        timestamp: new Date(),
        tag: "nature",
        category: "red",
        x: 0,
        y: 0
      },
      {
        id: 2,
        url: "http://placebear.com/200/200",
        author: "John Doe1",
        timestamp: new Date(),
        tag: "nature",
        category: "green",
        x: 10,
        y: 1
      },
      {
        id: 3,
        url: "http://placebear.com/200/200",
        author: "John Doe1",
        timestamp: new Date(),
        tag: "nature",
        category: "green",
        x: 10,
        y: 14
      }
    ];
    return <GameField bucket={bucket} />;
  });
