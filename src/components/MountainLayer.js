import React, { Component } from "react"
import { LayerGroup, Marker, Popup } from "react-leaflet"
import { ApiContext } from "../context/ApiContext"
import L from "leaflet";

class MountainLayer extends Component {

  constructor(props) {
    super(props)

    this.state = { mountains: [] }

    this.props.api.getMountainsByClassification(this.props.classification)
      .then(data => {
        this.setState({ mountains: data })
      })
  }

  render() {
    
    var icon = L.divIcon({
      className: 'map-marker ' + this.props.classification.toLowerCase(),
      iconSize:null,
      html:'<div></div>'
    });

    return (
      <LayerGroup>
        {
          this.state.mountains.map(m => {
            return (
              <Marker key={m.number} position={[m.latitude, m.longitude]} icon={icon} >
                <Popup>
                  <div>
                    <p>{m.number}. {m.name} ({m.height}m)</p>
                    <p>{m.regionNumber} - {m.regionName}</p>
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

export default props => (
  <ApiContext.Consumer>{api => <MountainLayer {...props} api={api} />}</ApiContext.Consumer>
);