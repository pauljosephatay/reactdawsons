import React, { Component } from "react";
import { Route } from "react-router";
import { Redirect, Switch } from "react-router-dom";

import MainAppBar from "../layout/MainAppBar";
import Drive from "./Drive/Drive";
import Home from "./Index/Home";

import withRoot from "../layout/withRoot";
import { connect } from "react-redux";

import { columnFlex } from "../styles/app-classes";

import auth from "../js/utils/auth";

export class Index extends Component {

  render() {

    const { loggedIn, currentlySending } = this.props.data;

    const user = auth.getUser();
    
    return (
      <div style={columnFlex}>
        <MainAppBar
          currentlySending={currentlySending}
          loggedIn={loggedIn}
          user={user}
          history={this.props.history}
          location={this.props.location}
          dispatch={this.props.dispatch}
        />

        <Switch>
          <Route path="/drive/(user|presets)" component={Drive} />
          <Route exact path="/" component={Home} />
          <Redirect from="/drive" to="/404"/>
        </Switch>

      </div>
    );
  }

  pathMatchedDrive() {
    const { match } = this.props;
    return match.params.d === "drive";
  }

}
// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default withRoot(connect(select)(Index));
