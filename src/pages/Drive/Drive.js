import React, { Component }  from 'react';
import Slide from "material-ui/transitions/Slide";

import DriveFunctions from "./DriveFunctions";
import ViewModuleIcon from "material-ui-icons/ViewModule";
import AccountCircleIcon from "material-ui-icons/AccountCircle";

import { PRESET, USER } from "../../js/constants/AppConstants";

class Drive extends Component {

  constructor(props){
    super(props);
    const { match } = this.props;
    this.subPath = match.params[0];
  }

  subPathMatched(param) {
    return this.subPath === param;
  }

  getSettings() {
    if ( this.subPathMatched('presets') ) {
      return {
        editable : false,
        driveType: PRESET,
        icon: <ViewModuleIcon />,
        title: "Presets"
      }
    } 

    return {
      editable : true,
      driveType: USER,
      icon: <AccountCircleIcon />,
      title: "Presets"
    }
    
  }

  render() {

    const settings = this.getSettings();

    return (
    <Slide direction="left" in offset="20">
      <DriveFunctions {...settings} />
    </Slide>
    );
  }
}


export default Drive;