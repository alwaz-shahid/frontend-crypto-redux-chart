import moment from 'moment'
const parseTimeDate = (val) => {
    const timeDate = moment(val)?.format("DD MMMM YYYY")
    // const timeDate = moment(val)?.format("DD mmm YYYY hh:mm a")
    
    return timeDate
}

export default parseTimeDate