import "@storybook/addon-actions/register";
import React from "react";
import { ThemeProvider } from "styled-components";

import { configure, setAddon, addDecorator } from "@storybook/react";
import withPropsCombinations, {
  setDefaults
} from "react-storybook-addon-props-combinations";

import theme from "../src/styled-components/theme";
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
