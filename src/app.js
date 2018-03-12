import React from 'react'
import axios from 'axios';
import Weather from './components/Weather'
import Time from './components/Time'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            temp: 30,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})   
        }
    }

    componentWillMount() {
        const getData = () =>{
            const url = `http://${window.location.hostname}:8060/weather`
            axios.get(url)
                .then((result) => {
                    this.setState({
                        temp: result.data,
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    })
                })
        }
        getData()
        setInterval(() => {
           getData()
        }, 10000)
    }
        render() {
            return (
                <div className="app">
                    <Time date={this.state.date} time={this.state.time} />
                    {/* <div className="text-right"><div id="date">
                    {this.props.date.toLocaleDateString()}</div>
                <div id="time">{this.props.date.toLocaleTimeString()}</div></div> */}
                    <Weather temp={this.state.temp} />
                </div>
            )
        }
    }

// function tick() {
//     ReactDOM.render(<App date={new Date()}/>, document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);


// componentDidMount: function() {
//   this.interval = setInterval(this.tick, 1000);
