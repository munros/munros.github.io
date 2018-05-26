import React, { Component } from "react"
import { Map as LeafletMap, ScaleControl } from "react-leaflet"
import LayersControl from "./LayersControl"
import Sidebar from "./Sidebar"

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "leaflet/dist/images/marker-icon.png";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow
});

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 57.301703,
      longitude: -4.60763,
      zoom: 7,
    };
  }

  render() {
    return (
      <div className="full-height">
        <Sidebar />
        <LeafletMap
          className="sidebar-map full-height"
          style={{ width: "100%" }}
          center={[this.state.latitude, this.state.longitude]}
          zoom={this.state.zoom}
          attributionControl={false}
          maxBounds={[[this.state.latitude + 5, this.state.longitude - 10], [this.state.latitude - 5, this.state.longitude + 10]]}
          minZoom={6}
          maxZoom={18}>
          <ScaleControl />
          <LayersControl position="topright" />
        </LeafletMap>
      </div>
    )
  }
}