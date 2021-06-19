require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const app = express()
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connect to db successfully'))


app.listen(PORT, console.log("Listening on port: " + `${PORT}`))