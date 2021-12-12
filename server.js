const express = require('express');
const app = express()
const cors = require('cors')
const route = require('./route/index')

app.use(cors())
app.use(express.json())

app.use(route)

module.exports = app