const router = require('express').Router()
const Chapters = require('../models/Chapters')

require('dotenv').config()

const mongoose = require('mongoose')
const {MongoClient} = require('mongodb')

router.get('/:chapter_endpoint', (req, res,next) => {
    const chapter_endppint = req.params.chapter_endpoint
    try{
        Chapters.find({'chapter_endpoint': `${chapter_endppint}`}).then((chapters) => {
            res.send(chapters)
        }).catch((error) => {
            res.statsu(500).send(error)
        })

    }catch (err){
        res.json({message: err.message})
    }
})
module.exports = router