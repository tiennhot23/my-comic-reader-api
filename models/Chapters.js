const mongoose = require('mongoose')
const {MongoClient} = require('mongodb')

const chapterSchema = new mongoose.Schema({
    chapter_endpoint: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    chapter_image: [{
        image_number: {
            type: Number,
            require: true
        },
        image_link: {
            type: String,
            require: true
        }
    }]
})


module.exports = mongoose.model('Chapters', chapterSchema)