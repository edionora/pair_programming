'use strict'  // strick JS syntax

// imports
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors');
const request = require('request');


// App setup
const app = express()
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

// send songs
app.get('/', (req, res) => res.send('hey'))

// start server
app.listen(8060, () => console.log('localhost:8080 is up!'))



const getDarkSkyData = (lat, lon) => {
    let apiKey = '22cc2cad4e250dafcf83e050ee45fe84';
    let url = 'https://api.darksky.net/forecast/' + apiKey + '/' + lat + ',' + lon;
    request(url, (err,res,body)=> {
        const data = JSON.parse(body)
        const temperature = data.currently.temperature
        console.log(temperature);
    })
    // axios.get(url)
    //     .then(res => { 
    //         this.setState({
    //             temp: 3
    //         })
    //     })
}

getDarkSkyData('45.3226198', '-75.9219474');