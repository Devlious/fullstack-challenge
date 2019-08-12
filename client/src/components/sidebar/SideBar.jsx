import React from 'react'
import PropTypes from 'prop-types'
import '../../css/sidebar.css'
import { locationAvailability, formatTime } from '../../utils/functions'

class LocationsSideBar extends React.Component {
  static propTypes = {
    locations: PropTypes.array
  }

  render() {
    const { locations = [] } = this.props

    return (
      // <div>
        <div className="sidebar">
          <div className="heading">
            <h1>Locations</h1>
          </div>
          <div id="listings" className="listings">
            {
              console.log(locations)
            }
            {
              locations.map(({location_name, open_time, close_time}, idx) => 
                <div key={'listing-'+idx} className="item">
                  <a className="title" href="#">{location_name}</a>
                  <div>Open: {formatTime(open_time)} - Closes: {formatTime(close_time)}</div>
                  <div id="availability" className={locationAvailability(open_time, close_time) ? "open" : "closed"}>
                    {locationAvailability(open_time, close_time) ? "Open" : "Closed"} 
                  </div>
                </div>
              )
            }
          </div>
        </div>   
      // </div>
    )
  }
}

export default LocationsSideBar
