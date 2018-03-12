import React from 'react'

 const Weather =({temp})=>  (
    <div className="weather">
            <h1> Today's Forecast </h1>
            <h3>{temp}</h3>
            
    </div>
 )

export default Weather