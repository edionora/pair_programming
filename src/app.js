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
    getDarkSkyData = (lat, lon) => {
        let apiKey = '22cc2cad4e250dafcf83e050ee45fe84';
        let url = 'https://api.darksky.net/forecast/' + apiKey + '/' + lat + ',' + lon;
        axios.get(url)
            .then(res => { 
                this.setState({
                    temp: 3
                })
            })
    }
    
    
    
    render() {
        this.getDarkSkyData('45.3226198', '-75.9219474');
        return (
            <div className="app">
                <h1>Test</h1>
                <Weather temp={this.state.temp}/>
            </div>
        )
    }
}


