const express = require('express')
const chapter = require('./routers/chapter')
const comic = require('./routers/comic')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb+srv://tiennhot23:tiennhot159@cluster.grkvh.mongodb.net/MyComicReaderAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use('/api/', comic)
app.use('/api/chapter', chapter)

app.listen(process.env.PORT || 3000)