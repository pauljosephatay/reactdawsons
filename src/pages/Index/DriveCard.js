import React from "react";
import HomeCard from "./HomeCard";

import { connect } from "react-redux";
import DriveCardButtons from "./DriveCardButtons";
import DriveStatsMiniComponent from "../../components/DriveStatsMiniComponent";


const DriveCard = props => {
  const { activeDriveFunctionId, driveFunctions } = props.data;
  const drive = driveFunctions.filter(t => t.id === activeDriveFunctionId);

  return (
    <HomeCard
      title={drive[0].name}
      headline="Drive Functions"
      paragraph="Choose from presets or configure settings for advance users"
      btmNav={<DriveCardButtons />}
      content={<DriveStatsMiniComponent drive={drive[0]} />}
    />
  );
};

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

export default connect(select)(DriveCard);
