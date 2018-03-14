import React from 'react'

const Time = ({ date, time }) => (
    <div className="card col s3 m3 l3 xl3 center">
        <div className="card-content center">
            <p className="card__title center">Now</p>
            <p className="center">{ date }</p>
            <p className="center">{ time }</p>
        </div>
    </div>
)

export default Time
