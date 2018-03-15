// imports
const express = require('express')
const cors = require('cors')
const request = require('request')
const cheerio = require('cheerio')
const getHolidays = require('./calendar')

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
    const url = 'https://news.google.com/news/headlines?ned=ca&hl=en-CA&gl=CA'
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(body)
            const heading = []
            $('.M1Uqc a').each((i, element) => {
                heading.push($(element).text())
            })
            res.send(heading)
        }
    })
})

// javascript news
app.get('/jsnews', (req, res) => {
    const url = 'https://www.javascript.com/news'
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(body)
            const heading = []
            $('.sb-h').each((i, element) => {
                heading.push($(element).text())
            })
            res.send(heading)
        }
    })
})


// send holidays
app.get('/holidays', (req, res) => {
    const holidays = getHolidays()
        .map((holiday, i) =>
            `${holiday.name.replace('\\', '')}, ${holiday.date.slice(0, 10)}`)
    res.send(holidays)
})

// start server
const port = 8060
app.listen(port, () => console.log(`localhost:${port} is up!`))
