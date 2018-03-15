import React from 'react'
import axios from 'axios';
import Weather from './components/Weather'
import Time from './components/Time'
import News from './components/News'
import JSNews from './components/JSNews'
import Holidays from './components/Holidays'
import MediaPlayer from './components/MediaPlayer'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            temp: 30,
            news: [],
            jsnews: [],
            holidays: [],
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(
                [],
                { hour: '2-digit', minute: '2-digit' }
            )
        }
    }

    componentWillMount() {
        const getData = () => {
            const url = `http://${window.location.hostname}:8060/weather`
            axios.get(url)
                .then((result) => {
                    this.setState({
                        temp: result.data,
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(
                            [],
                            { hour: '2-digit', minute: '2-digit' }
                        )
                    })
                })

            const newsUrl = `http://${window.location.hostname}:8060/news`
            axios.get(newsUrl)
                .then((result) => {
                    this.setState({
                        news: result.data
                    })
                })

            const jsnewsUrl = `http://${window.location.hostname}:8060/jsnews`
            axios.get(jsnewsUrl)
                .then((result) => {
                    this.setState({
                        jsnews: result.data
                    })
                })


            const holidaysUrl = `http://${window.location.hostname}:8060/holidays`
            axios.get(holidaysUrl)
                .then((result) => {
                    this.setState({
                        holidays: result.data
                    })
                })
        }

        getData()
        setInterval(() => {
            getData()
        }, 60000)  //Changed from 10000

    }

    render() {
        return (
            <div className="app row">
                <Time date={this.state.date} time={this.state.time} />

                <Weather temp={this.state.temp} />
                <Holidays holidays={this.state.holidays} />
                <MediaPlayer />
                <News news={this.state.news} />
                <JSNews news={this.state.jsnews} />
            </div>
        )
    }
}
