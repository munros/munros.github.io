import React, { Component } from "react"
import { LayerGroup, Marker, Popup } from "react-leaflet"
import munros from "./munros"

export default class MunrosLayer extends Component {

  render() {
    return (
      <LayerGroup>
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
      </LayerGroup>
    )
  }
}