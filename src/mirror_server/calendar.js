// imports
const Holidays = require('date-holidays')

const getHolidays = () => {
    const hd = new Holidays()
    hd.init('CA', 'ON')
    return hd.getHolidays(2018)    
}

module.exports = getHolidays
