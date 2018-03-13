// imports
const express = require('express')
const cors = require('cors')
const request = require('request')
const cheerio = require('cheerio')

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

// send news
app.get('/news', (req, res) => {
    const url = 'https://www.google.ca/search?q=recent%20news'
    request(url, (error, response, body) => {
        const $ = cheerio.load(body)
        const heading = []
        $('.r').each((i, element) => {
            heading.push($(element).text())
        })
        res.send(heading)
    })
})

// start server
const port = 8060
app.listen(port, () => console.log(`localhost:${port} is up!`))
