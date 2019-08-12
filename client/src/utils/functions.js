import moment from 'moment'

/**
 * This function will let you know if at your current time the location is opened or not
 * @param {String} open_time location open time
 * @param {String} close_time location close time
 * @returns {Boolean} 
 */
export const locationAvailability = (open_time, close_time) => {
    // TODO: Create function to determine availability times

    open_time = (open_time.length != 5) ? moment(open_time) : moment(open_time, "HH:mm")
    close_time = (close_time.length != 5) ? moment(close_time) : moment(close_time, "HH:mm")

    return moment().isBetween(open_time, close_time)
}

/**
 * This function will give you a formated time
 * @param {String} time time to be formated
 * @returns {String}
 */
export const formatTime = (time) => (time.length != 5) ? moment(time).format("hh:mm a") : moment(time, "hh:mm").format("hh:mm a")
