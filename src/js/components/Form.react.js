/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from "react";
import { changeForm } from "../actions/AppActions";

import ErrorMessage from "./ErrorMessage.react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

import { CircularProgress } from "material-ui/Progress";

import { formStyleSheet } from "../../styles/app-classes"

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require("object.assign");


class LoginForm extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <form className="form" onSubmit={this._onSubmit.bind(this)}>
        <div className={classes.error}>
          <ErrorMessage />
        </div>
        <div className="form__field-wrapper">
          <TextField
            id="username"
            label="Username: AzureDiamond"
            placeholder="Enter AzureDiamond"
            className={classes.textField}
            margin="normal"
            value={this.props.data.username}
            onChange={this._changeUsername.bind(this)}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
        <div className="form__field-wrapper">
          <TextField
            id="password"
            label="Password: hiker2"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.props.data.password}
            placeholder="Enter hiker2"
            onChange={this._changePassword.bind(this)}
          />
        </div>
        <div className={classes.btnWrapper}>
          {this.props.currentlySending
            ? <CircularProgress
                className={classes.progress}
                classes={{ primaryColor: classes.primary }}
              />
            : <Button
                raised
                color="primary"
                type="submit"
                className={classes.button}
              >
                {this.props.btnText}
              </Button>}
        </div>
      </form>
    );
  }

  // Change the username in the app state
  _changeUsername(evt) {
    var newState = this._mergeWithCurrentState({
      username: evt.target.value
    });

    this._emitChange(newState);
  }

  // Change the password in the app state
  _changePassword(evt) {
    var newState = this._mergeWithCurrentState({
      password: evt.target.value
    });

    this._emitChange(newState);
  }

  // Merges the current state with a change
  _mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  }

  // Emits a change of the form state to the application state
  _emitChange(newState) {
    this.props.dispatch(changeForm(newState));
  }

  // onSubmit call the passed onSubmit function
  _onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.data.username, this.props.data.password);
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

//export default withRoot(withStyles(styleSheet)(LoginForm));

export default withStyles(formStyleSheet)(LoginForm);
