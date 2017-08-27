import React, { Component } from "react";

import DriveMainComponent from "./DriveMainComponent";
import SecondaryAppBar from "../../components/SecondaryAppBar";

import { columnFlex } from "../../styles/app-classes";

class DriveFunctionsPage extends Component {
  render() {

    return (
      <div style={columnFlex}>
        <SecondaryAppBar />
        <DriveMainComponent {...this.props} />
      </div>
    );
  }
}

export default DriveFunctionsPage;
