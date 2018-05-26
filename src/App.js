import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="full-height">
        <Header />
        <Map className="full-height" />
      </div>
    );
  }
}

export default App;
