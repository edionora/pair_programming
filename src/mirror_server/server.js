'use strict'  // strick JS syntax

// imports
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors');

// App setup
const app = express()
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

// send songs
app.get('/', (req, res) => res.send('hey'))

// start server
app.listen(8080, () => console.log('localhost:8080 is up!'))
