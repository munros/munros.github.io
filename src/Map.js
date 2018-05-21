import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, ScaleControl, LayersControl, LayerGroup } from 'react-leaflet'
import {BingLayer} from 'react-leaflet-bing'
import munros from './munros'

const { BaseLayer, Overlay } = LayersControl
const bing_key = "AlSKPg8No2B0KaFRWRnaJcQ-2Bigz5unXhdVT2WCyJbi1NSgtlpudnuXmuQYhHdM"

export default class Map extends Component {
  state = {
    latitude: 57.3,
    longitude: -3.1,
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
        maxBounds={[[this.state.latitude+5, this.state.longitude-10], [this.state.latitude-5, this.state.longitude+10]]}
        minZoom={6}
        maxZoom={18}>
        <ScaleControl />
        <LayersControl position="topright">
          <BaseLayer checked name="Ordnance Survey">
            <LayerGroup>
              <TileLayer
                  url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
                  id="mapbox.streets"
                  minZoom="6" maxZoom="9"
                  accessToken="pk.eyJ1IjoiZ3JhaGFtbSIsImEiOiJjamgyY2oxM2IwMzE5MzNsZm9hbHBlYmN5In0.JGqACEauh8OvrXNRm9tKnA" />
              <BingLayer  bingkey={bing_key} type="OrdnanceSurvey" minZoom="10" maxZoom="18" />
            </LayerGroup>
          </BaseLayer>
          <BaseLayer name="Mapbox run/bike/hike">
            <TileLayer
              url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
              id="mapbox.run-bike-hike"
              accessToken="pk.eyJ1IjoiZ3JhaGFtbSIsImEiOiJjamgyY2oxM2IwMzE5MzNsZm9hbHBlYmN5In0.JGqACEauh8OvrXNRm9tKnA" />
          </BaseLayer>
          <BaseLayer name="Aerial">
            <TileLayer
              url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
              id="mapbox.streets-satellite"
              accessToken="pk.eyJ1IjoiZ3JhaGFtbSIsImEiOiJjamgyY2oxM2IwMzE5MzNsZm9hbHBlYmN5In0.JGqACEauh8OvrXNRm9tKnA" />
          </BaseLayer>
        </LayersControl>
        {
          munros.map((munro) => {
            return (
              <Marker key={munro.number} position={[munro.latitude, munro.longitude]}>
                <Popup>
                  <div>
                    <p>
                      {munro.number}. {munro.name} ({munro.height}m)
                    </p>
                    <p>
                      {munro.regionNumber} - {munro.regionName}
                    </p>
                    <p>
                      {munro.meaning}
                    </p>
                  </div>
                </Popup>
              </Marker>
            )
          })
        }
      </LeafletMap>
    )
  }
}