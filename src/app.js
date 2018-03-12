import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Weather from './components/Weather'
import Time from './components/Time'


export default class App extends React.Component {
    constructor (){
        super();
        this.state = {
            temp: 30,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
    }
    
    
    componentWillMount(){
        const url = `http://${window.location.hostname}:8060/weather`
        const localDate = new Date().toLocaleDateString()
        const localTime = new Date().toLocaleTimeString()
        axios.get(url) 
            .then((result) => {
                this.setState({
                    temp: result.data,
                    date: localDate,
                    time: localTime
                })
            })
    }
  

    render() {
        return (   
            <div className="app">
                <h1>Test</h1>
                <Time date={this.state.date} time={this.state.time}/>
                {/* <div className="text-right"><div id="date">{this.props.date.toLocaleDateString()}</div>
                <div id="time">{this.props.date.toLocaleTimeString()}</div></div> */}
                <Weather temp={this.state.temp}/>
            </div>
        )
    }
}

// function tick() {
//     ReactDOM.render(<App date={new Date()}/>, document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);
