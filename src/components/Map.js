import React, { Component } from "react"
import { Map as LeafletMap, ZoomControl, ScaleControl } from "react-leaflet"
import LayersControl from "./LayersControl"

import "leaflet/dist/leaflet.css";

export default class Map extends Component {
  state = {
    latitude: 57.301703,
    longitude: -4.60763,
    zoom: 7,
  }

  render() {
    return (
      <LeafletMap
        className="full-height"
        center={[this.state.latitude, this.state.longitude]}
        zoom={this.state.zoom}
        attributionControl={false}
        maxBounds={[[this.state.latitude + 5, this.state.longitude - 10], [this.state.latitude - 5, this.state.longitude + 10]]}
        minZoom={6}
        maxZoom={18}
        zoomControl={false}>
        <ZoomControl />
        <ScaleControl />
        <LayersControl position="topright"/>
      </LeafletMap>
    )
  }
}