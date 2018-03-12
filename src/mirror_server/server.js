'use strict'  // strick JS syntax

// imports
const express = require('express')
const cors = require('cors');
const request = require('request');


// App setup
const app = express()

app.use(cors())

// send songs
app.get('/weather', (req, res) => {
    let apiKey = '22cc2cad4e250dafcf83e050ee45fe84';
    let url = 'https://api.darksky.net/forecast/' + apiKey + '/45.3226198,-75.9219474';
    request(url, (error, response, body) => {
        const data = JSON.parse(body)
        const farenheit = data.currently.temperature
        const conversion = 5/9*(Number(farenheit) - 32)
        const celsius = Math.floor(conversion)
        res.json(celsius)
     })
})




// start server
app.listen(8060, () => console.log('localhost:8080 is up!'))
