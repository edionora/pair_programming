import React from 'react'

const Weather = ({ temp }) => (
    <div className="weather widget">
        <p>Today's Forecast</p>
        <p>{ temp } °C</p>
    </div>
)

export default Weather
