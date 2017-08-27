import React from "react";

import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Switch from "material-ui/Switch";
import { FormControlLabel } from "material-ui/Form";

import EditableStat from "../../components/EditableStat";

import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { driveStatsStyleSheet, driveStatsColors as colors } from "../../styles/app-classes";

const DriveStatsComponent = props => {
  const {
    updateSetting,
    active,
    drive,
    classes,
    editable,
    onSetActive
  } = props;

  const handleSetActive = (event, checked) => {
    if (checked) {
      onSetActive(drive.id);
    } else {
      onSetActive(-1); // set active drive function to the default function
    }
  };

  const stats = [
    { title: "Max Forward Speed", setting: "maxSpeed" },
    { title: "Min Forward Speed", setting: "minSpeed" },
    { title: "Forward Acceleration", setting: "acceleration" }
  ];
  
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} 
        className={classNames(classes.box, classes.titleBox)} >
        <FormControlLabel
          classes={{ label: classes.label }}
          control={
            <Switch
              checked={active}
              classes={{
                checked: classes.checked
              }}
              onChange={handleSetActive}
            />
          }
          label={active ? "" : "Set as active"}
        />

        <Typography
          type="headline"
          className={classNames(classes.title, classes.titleHeading)}
        >
          {drive.name}
        </Typography>
      </Grid>
      {stats.map((el, index) =>
        <Grid
          key={index}
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          className={classNames(classes.box)}
        >
          <Typography type="title" className={classNames(classes.title)}>
            {el.title}
          </Typography>
          <EditableStat
            editable={editable}
            updateSetting={updateSetting}
            setting={el.setting}
            value={drive[el.setting]}
            colors={colors}
          />
        </Grid>
      )}
    </Grid>
  );
};


export default withStyles(driveStatsStyleSheet)(DriveStatsComponent);
