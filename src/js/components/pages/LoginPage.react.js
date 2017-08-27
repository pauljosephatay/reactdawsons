/*
 * LoginPage
 *
 * Users login on this page
 * Route: /login
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../Form.react";

import { login } from "../../actions/AppActions";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

import Toolbar from "material-ui/Toolbar";

import Logo from "../../../img/ds-logo-light.png";

import Avatar from "material-ui/Avatar";

import withRoot from "../../../layout/withRoot";

import { soloCardStyleSheet } from "../../../styles/app-classes";


export class LoginPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending } = this.props.data;

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
                <span>DAWSON S</span>
              </Typography>
            </Toolbar>
            <Avatar
              alt="Dawson S"
              src={Logo}
              className={classes.avatar}
            />

            <div className="form-page__wrapper">
              <div className="form-page__form-wrapper">
                <div className="form-page__form-header" />
                {/* While the form is sending, show the loading indicator,
          otherwise show "Log in" on the submit button */}
                <LoginForm
                  data={formState}
                  dispatch={dispatch}
                  history={this.props.history}
                  onSubmit={this._login.bind(this)}
                  btnText={"Login"}
                  currentlySending={currentlySending}
                />
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }

  _login(username, password) {
    this.props.dispatch(login(username, password));
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

export default withRoot(withStyles(soloCardStyleSheet)(connect(select)(LoginPage)));
