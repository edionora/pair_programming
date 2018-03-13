import React from 'react'

const eachHolidayItem = (holidayItem, i) => <li key={i}>{holidayItem}</li>



const Holidays = ({ holidays }) => (
    <div className="holidays card col s3 m3 l3 xl3">
        <div className="card-content">
            <p className="holiday__title"> Holidays </p>
            <ul>{holidays.slice(2, 10).map(eachHolidayItem)}</ul>
        </div>
    </div>
)

export default Holidays