import React from 'react'

const eachNewsItem = (newsItem, i) => <li key={i}>{newsItem}</li>

const News = ({ news }) => (
    <div className="news card col s6 m6 l6 xl6">
        <div className="card-content">
            <p className="card__title">Google News</p>
            <ul className="news__headlines">{news.slice(0, 10).map(eachNewsItem)}</ul>
        </div>
    </div>
)

export default News
