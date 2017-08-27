import React, { Component } from "react";
import HomeCard from "./HomeCard";
import { connect } from "react-redux";
import { toggleSeatFunction } from "../../js/actions/AppActions";
import SeatingCardButtons from "./SeatingCardButtons";

class SeatingCard extends Component {
  render() {
    const { seatFunctions, toggleClick } = this.props;

    const handleChange = (id, value) => {
      toggleClick(id);
    };

    const content = (
      <SeatingCardButtons
        seatFunctions={seatFunctions}
        handleChange={handleChange}
      />
    );

    return (
      <HomeCard
        title="Seating Functions"
        content={content}
        headline="Seating Functions"
        paragraph="Configure your seating preferences. Toggle your seating function."
      />
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    seatFunctions: state.seatFunctions
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleClick: id => {
      dispatch(toggleSeatFunction(id));
    }
  };
};

SeatingCard = connect(select, mapDispatchToProps)(SeatingCard);

export default SeatingCard;