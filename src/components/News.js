import React from 'react'

const eachNewsItem = (newsItem, i) =><li>{newsItem}</li>

const News = ({ news }) => (
    <div className="card col s8 m8 l8 xl8">
        <div className="card-content">
            <p className="news__title">News</p>
            <ul className="news__headlines">{news.map(eachNewsItem)}</ul>
        </div>
    </div>
)

export default News
