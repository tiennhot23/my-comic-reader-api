const mongoose = require('mongoose')
const {MongoClient} = require('mongodb')

const detailcomicSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    thumb: {
        type: String,
        require: true
    },
    status:{
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
    endpoint: {
        type: String,
        require: true
    },
    chapter: [{
        chapter_title: {
            type: String,
            require: true
        },
        chapter_endpoint: {
            type: String,
            require: true
        },
        chapter_uploaded: {
            type: String,
            require: true
        }
    }],
    desc:{
        type: String,
        require: true
    },
    genre_list: [{
        genre_name: {
            type: String,
            require: true
        }
    }],
    date: {
        type: Date,
        require: true,
        default: Date.now()
    }
})


module.exports = mongoose.model('Detail_Comic', detailcomicSchema)