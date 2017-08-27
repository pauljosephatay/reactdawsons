/*
 * NotFound
 *
 */

import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

import Toolbar from "material-ui/Toolbar";

import Logo from "../../../img/ds-logo-light.png";

import Avatar from "material-ui/Avatar";

import { soloCardStyleSheet } from "../../../styles/app-classes";

export class NotFound extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        className={classes.root}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          className={classes.displayFlex}
        >
          <Paper className={classes.card + " " + classes.cardGutters}>
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                <span>Page Not Found</span>
              </Typography>
            </Toolbar>
            <Avatar
              alt="Dawson S"
              src={Logo}
              className={classes.avatar}
            />
            
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(soloCardStyleSheet )(NotFound);