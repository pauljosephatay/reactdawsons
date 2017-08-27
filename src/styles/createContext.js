import { create } from "jss";
import preset from "jss-preset-default";
import { SheetsRegistry } from "react-jss";
import createPalette, { light, dark } from "material-ui/styles/palette";
import { getContrastRatio } from "material-ui/styles/colorManipulator";
import common from "material-ui/colors/common";
import createMuiTheme from "material-ui/styles/theme";

import createTypography from "material-ui/styles/typography";
import { appPaletteColors, accent2, accent2hover } from "./app-colors";
import createGenerateClassName from "material-ui/styles/createGenerateClassName";

const palette = createPalette(appPaletteColors);

function getContrastText(color) {
  if (getContrastRatio(color, common.black) < 8) {
    return dark.text.primary;
  }
  return light.text.primary;
}

palette.getContrastText = getContrastText;

const theme = createMuiTheme({
  palette: palette,
  typography: createTypography(palette, {
    fontFamily:
      '"Source Sans Pro", "Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 600
  }),
  //shadows: thinShadows

  overrides: {
    MuiButton: {
      // Name of the styleSheet
      raisedPrimary: {
        color: "white",
        backgroundColor: accent2,
        "&:hover": {
          backgroundColor: accent2hover,
          // Reset on mouse devices
          "@media (hover: none)": {
            backgroundColor: accent2
          }
        }
      }
    }
  }
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new WeakMap(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry()
  };
}
