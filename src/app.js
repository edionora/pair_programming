import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Weather from './components/Weather'
import axios from 'axios';


export default class App extends React.Component {
    constructor (){
        super();
        this.state = {
            temp: 0
        }
    }
    // var lat = "45.3226198"
    // var lon = "-75.9219474"
    // Get data from DarkSky website

    
    
    
    render() {
       // this.getDarkSkyData('45.3226198', '-75.9219474');
        return (
            
            <div className="app">
                <h1>Test</h1>
                <div className="text-right"><div id="date">{this.props.date.toLocaleDateString()}</div>
                <div id="time">{this.props.date.toLocaleTimeString()}</div></div>
                <Weather temp={this.state.temp}/>
            </div>
        )
    }
}


