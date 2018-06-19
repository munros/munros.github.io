import React, { Component } from "react"
import { TileLayer, LayersControl as LeafletLayersControl, LayerGroup } from "react-leaflet"
import { BingLayer } from "react-leaflet-bing"
import MountainLayer from "./MountainLayer"

const { BaseLayer, Overlay } = LeafletLayersControl
const mapbox_url = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
const mapbox_key = "pk.eyJ1IjoiZ3JhaGFtbSIsImEiOiJjamgyY2oxM2IwMzE5MzNsZm9hbHBlYmN5In0.JGqACEauh8OvrXNRm9tKnA"
const bing_key = "AlSKPg8No2B0KaFRWRnaJcQ-2Bigz5unXhdVT2WCyJbi1NSgtlpudnuXmuQYhHdM"

export default class LayerControl extends Component {
  render() {
    return (
      <LeafletLayersControl>
        <BaseLayer checked name="Ordnance Survey">
          <LayerGroup>
            <TileLayer
              url={mapbox_url}
              id="mapbox.streets"
              minZoom="6" maxZoom="11"
              accessToken={mapbox_key} />
            <BingLayer bingkey={bing_key} type="OrdnanceSurvey" minZoom="12" maxZoom="18" />
          </LayerGroup>
        </BaseLayer>
        <BaseLayer name="Mapbox run/bike/hike">
          <TileLayer
            url={mapbox_url}
            id="mapbox.run-bike-hike"
            accessToken={mapbox_key} />
        </BaseLayer>
        <BaseLayer name="Aerial">
          <TileLayer
            url={mapbox_url}
            id="mapbox.streets-satellite"
            accessToken={mapbox_key} />
        </BaseLayer>
        <Overlay checked name="Munros">
          <MountainLayer classification="Munros" />
        </Overlay>
        <Overlay name="Corbetts">
          <MountainLayer classification="Corbetts" />
        </Overlay>
        <Overlay name="Grahams">
          <MountainLayer classification="Grahams" />
        </Overlay>
      </LeafletLayersControl>
    )
  }
}