import React, { Component } from "react";
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Switch from "material-ui/Switch";

import { withStyles } from "material-ui/styles";

import { seatingCardButtonsStyleSheet } from "../../styles/app-classes";

import { icons } from './icons'

class SeatingCardButtons extends Component {

render ( ) {

  const  { seatFunctions, handleChange, classes } = this.props;

  return (
      <List>
        {seatFunctions.map((el, index) => {
          
          return (
            <ListItem divider key={index}>
              <ListItemIcon>
                <img src={icons[el.icon]} alt={el.name} />
              </ListItemIcon>
              <ListItemText primary={el.name} />
              <ListItemSecondaryAction>
                <Switch
                  classes={{
                    checked: classes.checked,
                    bar: classes.bar
                  }}
                  checked={el.enabled}
                  onChange={(e, v) => {
                    handleChange(el.id);
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    )}
}

export default withStyles(seatingCardButtonsStyleSheet)(SeatingCardButtons);