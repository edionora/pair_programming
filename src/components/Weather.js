import React from 'react'
import { Switch, Route } from 'react-router-dom'

 const Weather =({temp})=>  (
    <div className="weather">
            <h1> Today's Forecast </h1>
            <h3>{temp}</h3>
            
    </div>
 )

export default Weather