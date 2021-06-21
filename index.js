const express = require('express')
const PORT = process.env.PORT || 3000
const chapter = require('./routers/chapter')
const comic = require('./routers/comic')
const mongoose = require('mongoose')
const serverless = require('serverless-http')
require('dotenv').config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use('/api/', comic)
app.use('/api/chapter', chapter)

app.listen(PORT, console.log("Listening on port: " + `${PORT}`))