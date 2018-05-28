// @flow
import { ThemeProvider, injectGlobal } from "styled-components";
import { normalize } from "polished";
import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import theme from "./styled-components/theme";

injectGlobal`
${normalize()}
@import url('https://fonts.googleapis.com/css?family=Roboto');

body, button {
  font-family: 'Roboto', sans-serif;
}

.fade-enter {
  opacity: 0.01;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0.01;
  transition: opacity 500ms ease-in;
}
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
