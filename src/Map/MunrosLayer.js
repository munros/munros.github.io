import React, { Component } from "react"
import { LayerGroup, Marker, Popup } from "react-leaflet"

export default class MunrosLayer extends Component {
  constructor() {
    super()
    this.state = {munros: null}
  }

  componentDidMount() {
    fetch("data/munros.json")
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.setState({munros: data})
          })
        }
      })
  }

  render() {

    if (this.state.munros === null) { return null }

    return (
      <LayerGroup>
        {
          this.state.munros.map((munro) => {
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