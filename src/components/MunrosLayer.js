import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as mountainActions from "../actions/mountainActions"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { LayerGroup, Marker, Popup } from "react-leaflet"

class MunrosLayer extends Component {

  componentDidMount() {
    this.props.mountainActions.fetchMountains()
  }

  render() {

    if (this.props.mountains.length === null) { return null }

    return (
      <LayerGroup>
        {
          this.props.mountains.map((munro) => {
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

MunrosLayer.propTypes = {
  mountainActions: PropTypes.object,
  mountains: PropTypes.array
}

function mapStateToProps(state) {
  return {
    mountains: state.mountains
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mountainActions: bindActionCreators(mountainActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MunrosLayer)