import React, { Component } from "react";

import {
  withStyles,
  createStyleSheet,
  MuiThemeProvider
} from "material-ui/styles";
import createContext from "../styles/createContext";

// Apply some reset
const styleSheet = createStyleSheet(theme => ({
  "@global": {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: "antialiased", // Antialiasing.
      MozOsxFontSmoothing: "grayscale" // Antialiasing.
    },
    body: {
      margin: 0
    }
  }
}));

let AppWrapper = props => props.children;

AppWrapper = withStyles(styleSheet)(AppWrapper);

const context = createContext();

function withRoot(BaseComponent) {
  if (BaseComponent.MuiThemed) {
    //return BaseComponent;
  }

  class WithRoot extends Component {
    componentDidMount() {
      // Remove the server-side injected CSS.

      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    /*render() {
      return (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
            <AppWrapper>
              <BaseComponent {...this.props} />
            </AppWrapper>
          </MuiThemeProvider>
        </JssProvider>
      );
    }*/
    render() {
      return (
        <MuiThemeProvider
          theme={context.theme}
          sheetsManager={context.sheetsManager}
        >
          <AppWrapper>
            <BaseComponent {...this.props} />
          </AppWrapper>
        </MuiThemeProvider>
      );
    }
  }

  WithRoot.displayName = `withRoot(${BaseComponent.displayName})`;
  //WithRoot.MuiThemed = true;

  return WithRoot;
}

export default withRoot;
