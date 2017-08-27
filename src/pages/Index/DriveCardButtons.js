import React from "react";
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import IconButton from "material-ui/IconButton";
import ViewModuleIcon from "material-ui-icons/ViewModule";
import AccountCircleIcon from "material-ui-icons/AccountCircle";
import ChevronRightIcon from "material-ui-icons/ChevronRight";

import { withRouter } from "react-router-dom";

import { driveCardButtonsStyles as styles } from '../../styles/app-classes';

const { bgAccent, activeStyle, altIconStyle } = styles;

const listItems = [
  { 
    url: "drive/presets",
    text: "Presets",
    aria: "Open Presets",
    icon: ViewModuleIcon
  },

  { 
    url: "drive/user",
    text: "User",
    aria: "Open User Drive Function",
    icon: AccountCircleIcon
  }
];


const DriveCardButtons = withRouter(({ history }) =>
  (<List style={bgAccent}>
    {
      listItems.map((item,index) => {
        return(
          <ListItem
            key={index}
            button
            divider
            onClick={() => {
              history.push(item.url);
            }}
          >
          <ListItemIcon>
              {<item.icon style={activeStyle} />}
            </ListItemIcon>
            <ListItemText primary={<span style={activeStyle}>{item.text}</span>} />
            <ListItemSecondaryAction>
              <IconButton aria-label={item.aria}>
                <ChevronRightIcon style={altIconStyle} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          );
      })
    }
  </List>)
);

export default DriveCardButtons;