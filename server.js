const express = require('express');
const app = express()
const cors = require('cors')
const route = require('./route/index')

app.use(cors())
app.use(express.json())

app.use(route)

//app.listen(8080) commented to take the tests
module.exports = app