import React from 'react'

const eachNewsItem = (newsItem, i) => <p>{newsItem}</p>

const News = ({ news }) => (
    <div className="card col s8 m8 l8 xl8">
        <div className="card-content">
            <h1>News</h1>
            {news.map(eachNewsItem)}
        </div>
    </div>
)

export default News
