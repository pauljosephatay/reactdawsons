import React from "react";
import PropTypes from "prop-types";

import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";

import InboxIcon from "material-ui-icons/Inbox";

import { withStyles } from "material-ui/styles";
import { systemSummaryStyleSheet } from "../../styles/app-classes";

import { connect } from "react-redux";

function SystemSummary(props) {

  const { classes, specs } = props;

  return (
    <Paper className={classes.root}>
      <div className={classes.flexBox}>
        <Avatar className={classes.titleIcon}>
          <InboxIcon color="primary" />
        </Avatar>
        <Typography
          type="headline"
          color="secondary"
          className={`${classes.flex } ${classes.title} `}
        >
          System Summary
        </Typography>
      </div>
      <Table>
        <TableBody>
          {Object.keys(specs).map(index => {
            return (
              <TableRow key={index}>
                <TableCell disablePadding className={classes.cell}>
                  <span className={classes.specsText}>
                    {index}
                  </span>
                </TableCell>
                <TableCell disablePadding numeric className={classes.cell2}>
                  <span className={classes.specsValue}>
                    {specs[index]}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SystemSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    specs: state.specs
  };
}

export default withStyles(systemSummaryStyleSheet)(connect(select)(SystemSummary));
