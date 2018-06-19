import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./App.css";
import Map from "./components/Map"
import Header from "./components/Header"
import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#827717'
    },
    secondary: {
      main: '#fbc02d'
    },
  },
  status: {
    danger: 'deepOrange',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Map className="full-height" />
      </MuiThemeProvider>
    );
  }
}

export default App;
