const mongoose = require('mongoose')
const {MongoClient} = require('mongodb')

const genresSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    endpoint: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('Genres', genresSchema)