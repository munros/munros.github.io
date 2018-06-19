import React, { Component } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import logo from "../logo/white.svg"

export default class Header extends Component {

  render() {
    return (
      <AppBar style={{ background: "rgba(130, 119, 23, 0.8)"}}>
        <Toolbar>
          <Typography variant="title" color="inherit" style={{fontWeight: "normal"}}>
            Scotland&apos;s <img src={logo} style={{height: "1em"}} />ountains
          </Typography>
        </Toolbar>
      </AppBar>      
    )
  }
}