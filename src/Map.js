import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, ScaleControl } from 'react-leaflet'

export default class Map extends Component {
  state = {
    lat: 56.666933,
    lng: -4.100229,
    zoom: 7,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <LeafletMap
        className="full-height"
        style={{ width: "100%" }}
        center={position}
        zoom={this.state.zoom}
        attributionControl={false}
        maxBounds={[[61, -10], [54, 2]]}
        minZoom={6}
        maxZoom={18}>
        <ScaleControl />
        <TileLayer
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          //attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          id="mapbox.run-bike-hike"
          accessToken="pk.eyJ1IjoiZ3JhaGFtbSIsImEiOiJjamgyY2oxM2IwMzE5MzNsZm9hbHBlYmN5In0.JGqACEauh8OvrXNRm9tKnA" />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </LeafletMap>
    )
  }
}