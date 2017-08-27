import React from "react";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar
} from "material-ui/List";

import { sideNavItemStyles } from "../../styles/app-classes";

const SideNavItem = ({ onClick, active, text, index }) => {
  const textStyle = sideNavItemStyles.textStyle(active);
  const avatarStyle = sideNavItemStyles.avatarStyle(active);

  return (
    <ListItem button divider onClick={onClick}>
      <ListItemAvatar>
        <Avatar style={avatarStyle}>
          {index + 1}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <span style={textStyle}>
            {text}
          </span>
        }
      />
      <ListItemSecondaryAction>
        {/* Show in mobile later on */}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

SideNavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default SideNavItem;
