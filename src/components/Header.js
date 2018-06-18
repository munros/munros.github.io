import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
export default class Header extends Component {

  render() {
    return (
      <div id="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Scotland's Mountains
            </Typography>
          </Toolbar>
        </AppBar>      
      </div>
    )
  }
}