import React from 'react'

const Weather = ({ temp }) => (
    <div className="card col s3 m3 l3 xl3">
        <p>Today's Forecast</p>
        <p>{ temp } °C</p>
    </div>
)

export default Weather
