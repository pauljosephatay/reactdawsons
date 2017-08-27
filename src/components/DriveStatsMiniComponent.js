import React from "react";

import Typography from "material-ui/Typography";

import EditableStat from "./EditableStat";

import { withStyles } from "material-ui/styles";
import { driveStatsMiniStyleSheet } from "../styles/app-classes";

const DriveStatsMiniComponent = props => {
  const { drive, classes } = props;

  return (
    <div className={classes.mainBox}>
      <div className={classes.miniMainBox}>
        <div className={classes.miniBox1}>
          <EditableStat
            editable={false}
            setting="maxSpeed"
            value={drive.maxSpeed}
          />
          <Typography type="subheading" className={classes.title}>
            Max Forward Speed
          </Typography>
        </div>

        <div className={classes.miniBox2}>
          <EditableStat
            editable={false}
            setting="minSpeed"
            value={drive.minSpeed}
          />
          <Typography type="body2" className={classes.title}>
            Min Forward Speed
          </Typography>
        </div>

        <div className={classes.miniBox3}>
          <EditableStat
            editable={false}
            setting="acceleration"
            value={drive.acceleration}
          />
          <Typography type="body2" className={classes.title}>
            Forward Acceleration
          </Typography>
        </div>
      </div>
    </div>
  );
};

DriveStatsMiniComponent.propTypes = {};

export default withStyles(driveStatsMiniStyleSheet)(DriveStatsMiniComponent);
