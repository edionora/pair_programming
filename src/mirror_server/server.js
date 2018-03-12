// imports
const express = require('express')
const cors = require('cors')
const request = require('request')

// App setup
const app = express()
app.use(cors())

// send weather
app.get('/weather', (req, res) => {
    const url = 'https://api.darksky.net/forecast/'
        + '22cc2cad4e250dafcf83e050ee45fe84'
        + '/45.3226198,-75.9219474'
    request(url, (error, response, body) => {
        const data = JSON.parse(body)
        const farenheit = data.currently.temperature
        const conversion = (5 / 9) * (Number(farenheit) - 32)
        const celsius = Math.floor(conversion)
        res.json(celsius)
    })
})

// start server
const port = 8060
app.listen(port, () => console.log(`localhost:${port} is up!`))
