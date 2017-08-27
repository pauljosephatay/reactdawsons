import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import Menu, { MenuItem } from "material-ui/Menu";
import ButtonBase from "material-ui/Button";
import { CircularProgress } from "material-ui/Progress";

import Logo from "../img/ds-logo-light.png";
import ExitIcon from "material-ui-icons/ExitToApp";

import { withStyles } from "material-ui/styles";
import { mainAppBarStyleSheet } from "../styles/app-classes";

import { logout } from "../js/actions/AppActions";

export class MainAppBar extends Component {
  state = {
    anchorEl: undefined,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, user = "", currentlySending } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" className={classes.flex}>
              <span style={{ color: "white" }}>DAWSON S</span>{" "}
              <img src={Logo} alt="Dawson S" className={classes.img} />
            </Typography>
            {currentlySending
              ? <CircularProgress className={classes.progress} />
              : <ButtonBase
                  className={classes.avatarButton}
                  onClick={this.handleClick}
                  focusRipple
                >
                  {user.substring(0, 1)}
                </ButtonBase>}
          </Toolbar>
          <Menu
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            MenuListProps={{
              style: {
                width: 300,
                paddingTop: 0
              }
            }}
          >
            <div className={classes.menuHeader}>
              <Avatar className={classes.avatar}>
                {user.substring(0, 1)}
              </Avatar>{" "}
              <Typography color="secondary">{user}</Typography>
            </div>

            <MenuItem
              onClick={() => {
                this._logout();
              }}
            >
              <ExitIcon className={classes.avatar} />{" "}
              <Typography color="secondary">Logout</Typography>
            </MenuItem>
          </Menu>
        </AppBar>
      </div>
    );
  }

  _logout() {
    this.handleRequestClose();
    this.props.dispatch(logout());
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  currentlySending: PropTypes.bool.isRequired
};

export default withStyles(mainAppBarStyleSheet)(MainAppBar);
