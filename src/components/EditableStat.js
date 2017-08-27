import React, { Component } from "react";
import PropTypes from "prop-types";

import PlusIcon from "material-ui-icons/Add";
import RemoveIcon from "material-ui-icons/Remove";
import Button from "material-ui/Button";
import { accent2 } from "../styles/app-colors";
import { Doughnut, Chart } from "react-chartjs-2";
import pieConfig, { registerTextCenter } from "./DoughnutConstants";
import classNames from "classnames";
import { withStyles, createStyleSheet } from "material-ui/styles";

const styleSheet = createStyleSheet(theme => ({
  root: {
    height: "100%",
    flexGrow: 2
  },

  chartBox: {
    margin: "0 auto",
    maxWidth: 300,
    textAlign: "center",
    padding: 10
  },
  control: {
    margin: 5
  }
}));

const dataset = {
  backgroundColor: ["#ddd", accent2],
  borderWidth: [0, 0]
};

const pieData = {
  datasets: [dataset]
};

class EditableStat extends Component {
  componentWillMount() {
    registerTextCenter(Chart);
  }

  decrementSetting() {
    this.props.updateSetting(-10, this.props.setting);
    //this.props.dispatch(updateDrive({ index: 0, setting: this.props.setting, value: -10}))
  }

  incrementSetting() {
    this.props.updateSetting(10, this.props.setting);
  }

  render() {
    const { value, editable, classes, colors } = this.props;

    let doughnutColors = colors ? colors : dataset.backgroundColor;

    const controls = (
      <div className={classNames(classes.chartBox)}>
        <Button
          raised
          color="primary"
          aria-label="Reduce"
          className={classNames(classes.control)}
          onClick={() => this.decrementSetting()}
        >
          <RemoveIcon />
        </Button>

        <Button
          raised
          color="primary"
          aria-label="Increase"
          className={classNames(classes.control)}
          onClick={() => this.incrementSetting()}
        >
          <PlusIcon />
        </Button>
      </div>
    );

    return (
      <div>
        <div className={classNames(classes.chartBox)}>
          <Doughnut
            value={value}
            data={{
              ...pieData,
              datasets: [
                {
                  ...dataset,
                  data: [100 - value, value],
                  backgroundColor: doughnutColors
                }
              ]
            }}
            options={{ ...pieConfig, title: `${value}%` }}
          />
        </div>
        {editable ? controls : ""}
      </div>
    );
  }
}

EditableStat.propTypes = {
  classes: PropTypes.object.isRequired
};

// Wrap the component to inject dispatch and state into it
export default withStyles(styleSheet)(EditableStat);
