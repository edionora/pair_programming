import React from 'react'
import axios from 'axios';
import Weather from './components/Weather'
import Time from './components/Time'
import News from './components/News'


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            temp: 30,
            news: [],
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
                <News news={this.state.news} />
            </div>
        )
    }
}
