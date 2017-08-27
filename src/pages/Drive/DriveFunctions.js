import { connect } from "react-redux";
import { updateDrive, setActiveDrive } from "../../js/actions/AppActions";
import DriveFunctionsPage from "./DriveFunctionsPage";

import { PRESET, USER } from "../../js/constants/AppConstants";

const getDriveFunctions = (driveFunctions, type) => {
  switch (true) {
    case type === USER || type === PRESET:
      return driveFunctions.filter(t => t.type === type);
    default:
      return driveFunctions;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    activeDriveFunctionId: state.activeDriveFunctionId,
    driveFunctions: getDriveFunctions(state.driveFunctions, ownProps.driveType)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateClick: (drive, setting, step) => {
      let value = drive[setting];
      let nextValue = value + step;

      if (nextValue < 10 || nextValue > 100) {
        return;
      }

      dispatch(
        updateDrive({
          index: drive.id,
          setting: setting,
          value: nextValue
        })
      );
    },
    onSetActive: id => {
      dispatch(setActiveDrive(id));
    }
  };
};

const DriveFunctions = connect(mapStateToProps, mapDispatchToProps)(
  DriveFunctionsPage
);

export default DriveFunctions;
