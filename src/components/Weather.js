import React from 'react'

const Weather = ({ temp }) => (
    <div className="card col s3 m3 l3 xl3">
        
        <p className="center weather__temp">{ temp } °C</p>
    </div>
)

export default Weather
