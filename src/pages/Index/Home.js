import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';

import SystemSummary from './SystemSummary';
import DriveCard from './DriveCard';
import SeatingCard from './SeatingCard';

import { homeStyleSheet } from "../../styles/app-classes";

export function Home(props) {

  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} wrap="wrap" align="stretch" >
        <Grid item xs className={classes.displayFlex}>
          <SystemSummary/>  
        </Grid>
        <Grid item md={4} xs={12} className={classes.displayFlex}>
          <DriveCard />
        </Grid>
        <Grid item md={4} xs={12} className={classes.displayFlex} >
          <SeatingCard />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeStyleSheet)(Home);