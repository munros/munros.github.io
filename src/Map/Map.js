import React, { Component } from "react"
import { Map as LeafletMap, ScaleControl } from "react-leaflet"
import LayersControl from "./LayersControl"

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
        style={{ width: "100%" }}
        center={[this.state.latitude, this.state.longitude]}
        zoom={this.state.zoom}
        attributionControl={false}
        maxBounds={[[this.state.latitude + 5, this.state.longitude - 10], [this.state.latitude - 5, this.state.longitude + 10]]}
        minZoom={6}
        maxZoom={18}>
        <ScaleControl />
        <LayersControl position="topright"/>
      </LeafletMap>
    )
  }
}