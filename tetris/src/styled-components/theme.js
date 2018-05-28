import { darken, lighten } from "polished";

export default {
  colors: {
    mainText: "white",
    buttonBackground: "#276071",
    buttonBackgroundDisabled: lighten(0.05, "#276071"),
    buttonBackgroundHover: lighten(0.05, "#276071"),
    buttonBackgroundActive: "#febe14",
    buttonBackgroundActiveHover: darken(0.05, "#febe14")
  },
  fonts: {
    default: "'Roboto', sans-serif"
  }
};
