import React from 'react'

const Time = ({ date, time }) => (
    <div className="time widget">
        <p> Today is: </p>
        <p>{ date }</p>
        <p> And the current time is: </p>
        <p>{ time }</p>
    </div>
)

export default Time
