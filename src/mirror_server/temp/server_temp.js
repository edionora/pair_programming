// imports
const request = require('request')
const cheerio = require('cheerio')

const url = 'https://news.google.com/news/headlines?ned=ca&hl=en-CA&gl=CA'
request(url, (error, response, body) => {
    const $ = cheerio.load(body)
    const heading = []
    $('.M1Uqc a').each((i, element) => {
        heading.push($(element).text())
    })
    console.log(heading)
})
