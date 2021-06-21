const mongoose = require('mongoose')
const {MongoClient} = require('mongodb')

const comicSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    thumb: {
        type: String,
        require: true
    },
    rating: {
        type: String,
        require: true
    },
    updated_on: {
        type: String,
        require: true
    },
    chapter: {
        type: String,
        require: true
    },
    endpoint: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('Comics', comicSchema)