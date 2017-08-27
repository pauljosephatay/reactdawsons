import React from "react";
import PropTypes from "prop-types";
import List from "material-ui/List";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import GamepadIcon from "material-ui-icons/Gamepad";

import SideNavItem from "./SideNavItem";

import { sideNavStyles as styles } from "../../styles/app-classes";


const SideNav = ({
  onClick,
  contextDriveId,
  driveFunctions,
  title,
  classes,
  icon
}) => {
  const subheader = (
    <Toolbar style={styles.box}>
      <Avatar style={styles.titleIcon}>
        {icon ? icon : <GamepadIcon color="primary" />}
      </Avatar>
      <Typography type="headline" style={styles.title}>
        {title}
      </Typography>
    </Toolbar>
  );

  return (
    <List subheader={subheader}>
      {driveFunctions.map((el, index) =>
        <SideNavItem
          key={index}
          onClick={() => onClick(index)}
          active={index === contextDriveId}
          text={el.name}
          index={index}
        />
      )}
    </List>
  );
};

SideNav.propTypes = {
  onClick: PropTypes.func.isRequired,
  contextDriveId: PropTypes.number.isRequired
};

export default SideNav;
