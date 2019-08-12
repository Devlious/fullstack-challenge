import React from 'react'
import PropTypes from 'prop-types'
import '../../css/buttons.css'
import { locationAvailability, formatTime } from '../../utils/functions'

class PopupFormat extends React.Component {
  static propTypes = {
    locationValues: PropTypes.object,
    onClick: PropTypes.func,
    onClickDelete: PropTypes.func,
  }

  render () {
    let { location_name, open_time, close_time } = this.props.locationValues

    return (
      <div>
        <div>
          <button className='button popup-button' onClick={this.props.onClick}>Edit</button>
          <button className='button warning popup-button margin-left' onClick={this.props.onClickDelete}>Delete</button>
        </div>

        <div> Location Name: {location_name} </div>
        <div> Opens at: {formatTime(open_time)} </div>
        <div> Closes at: {formatTime(close_time)} </div>
        <div>
          Currently: {locationAvailability(open_time, close_time) ? 'Open' : 'Closed'}
        </div>
      </div>
    )
  }
}

export default PopupFormat