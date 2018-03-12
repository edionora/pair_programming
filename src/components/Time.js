import React from 'react'

 const Time =({date, time})=>  (
    <div className="Time">
            <h1> Today is: </h1>
            <h3>{date}</h3>
            <h1> And the current time is: </h1>
            <h4>{time}</h4> 
    </div>
 )

export default Time