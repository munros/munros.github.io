import React, { Component } from 'react';
import './App.css';
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="full-height">
        <Map className="full-height" />
      </div>
    );
  }
}

export default App;
