import React, { Component } from "react"
import { LayerGroup, Marker, Popup } from "react-leaflet"
import { MountainContext } from "../context/MountainContext"

class MunrosLayer extends Component {

  constructor() {
    super()
    this.state = { mountains: [] }
  }

  componentDidMount() {
    this.props.context.getClassification("munros", data => {
      this.setState({mountains: data})
    })
  }

  render() {

    return (
      <LayerGroup>
        {
          this.state.mountains.map((munro) => {
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

export default props => (
  <MountainContext.Consumer>
    {context => <MunrosLayer context={context} />}
  </MountainContext.Consumer>
);