import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";

import SideNav from "./SideNav";
import DriveStatsComponent from "./DriveStatsComponent";

import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { driveMainStyleSheet } from "../../styles/app-classes";

class DriveMainComponent extends Component {
  constructor(props) {
    super(props);
    const contextDriveId = 0;
    this.state = { contextDriveId };
  }

  selectDriveFunction = id => {
    this.setState({
      ...this.state,
      contextDriveId: id
    });
  };

  render() {
    const classes = this.props.classes;

    const { driveFunctions,
     activeDriveFunctionId,
     editable,
     onSetActive } = this.props;

    const { contextDriveId } = this.state;
    const drive = driveFunctions[contextDriveId];

    const updateSetting = (step, setting) => {
      this.props.onUpdateClick(drive, setting, step);
    };

    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid
          item
          md={4}
          xs={12}
          className={classNames(classes.sidePane, classes.box)}
        >
          <SideNav
            {...this.props}
            onClick={this.selectDriveFunction}
            contextDriveId={contextDriveId}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <DriveStatsComponent
            editable={editable}
            onSetActive={onSetActive}
            updateSetting={updateSetting}
            active={activeDriveFunctionId === drive.id}
            drive={drive}
          />
        </Grid>
      </Grid>
    );
  }
}

DriveMainComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(driveMainStyleSheet)(DriveMainComponent);
