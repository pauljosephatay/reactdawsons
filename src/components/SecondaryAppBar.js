import React from "react";
import { appPaletteColors } from "../styles/app-colors";
import { withRouter } from "react-router-dom";
import ArrowBackIcon from "material-ui-icons/ArrowBack";
import IconButton from "material-ui/IconButton";
import Toolbar from "material-ui/Toolbar";

const style = {
  flex: 1,
  backgroundColor: appPaletteColors.primary[300]
};

const SecondaryAppBar = withRouter(({ history }) =>
  <Toolbar style={style}>
    <IconButton
      aria-label="Back"
      onClick={() => {
        history.push("/");
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  </Toolbar>
);

export default SecondaryAppBar;
