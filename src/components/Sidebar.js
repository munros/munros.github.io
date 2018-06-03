import React, { Component } from "react"
import { Sidebar as LeafletSidebar, Tab } from "react-leaflet-sidebarv2"
import "font-awesome/css/font-awesome.css"
import FontAwesome from "react-fontawesome"
import "./Sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true//,
      //selected: 'home',
    };
  }

  onClose() {
    this.setState({ collapsed: true });
  }

  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id,
    })
  }

  render() {
    return (
      <LeafletSidebar id="sidebar" className="leaflet-sidebar" collapsed={this.state.collapsed} selected={this.state.selected}
        onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} closeIcon="fa fa-times">
        <Tab id="home" header="Home" icon="fa fa-home" >
          <p>No place like home!</p>
        </Tab>
        <Tab id="settings" header="Settings" icon="fa fa-cog" anchor="bottom">
          <p>Settings dialogue.</p>
        </Tab>
      </LeafletSidebar>
    )
  }
}