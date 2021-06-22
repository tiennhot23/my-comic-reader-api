const router = require('express').Router()
const Genres = require('../models/Genres')
const Comics = require('../models/Comics')
const DetailComics = require('../models/DetailComics')

//genres detail
router.get('/genres/:genre', (req, res,next) => {
    const genre = req.params.genre
    try{
        Comics.find({ 'genre_list.genre_endpoint': `${genre}`}).then((comics) => {
            res.send(comics)
        }).catch((error) => {
            res.statsu(500).send(error)
        })

    }catch (err){
        res.json({message: err.message})
    }
})

//genres list
router.get('/genres', (req, res,next) => {
    try{
        Genres.find({}).then((genres) => {
            res.send(genres)
        }).catch((error) => {
            res.statsu(500).send(error)
        })

    }catch (err){
        res.json({message: err.message})
    }
})

//all comic
router.get('/comics', (req, res,next) => {
    try{
        Comics.find({}).then((comics) => {
            res.send(comics)
        }).catch((error) => {
            res.statsu(500).send(error)
        })

    }catch (err){
        res.json({message: err.message})
    }
})

//detail comic
router.get('/:endpoint', (req, res,next) => {
    const endpoint = req.params.endpoint
    try{
        DetailComics.find({ 'endpoint': `${endpoint}`}).then((detail_comics) => {
            res.send(detail_comics)
        }).catch((error) => {
            res.statsu(500).send(error)
        })

    }catch (err){
        res.json({message: err.message})
    }
})

//search comic
router.get('/search/:query', (req, res,next) => {
    const query = req.params.query
    const q = `${query}`
    try{
        /*
            like %a => /a$/
            like a% => /^a/
            like %a% = > /a/
        */
        Comics.find({ title: new RegExp(q)}).then((comics) => {
            res.send(comics)
        }).catch((error) => {
            res.statsu(500).send(error)
        })

    }catch (err){
        res.json({message: err.message})
    }
})




router.get('/', (req, res,next) => {
    res.json({
        'hello': 'hi!'
    })
})

router.post('/', (req, res, next) => {
    const detail_comics = new DetailComics(req.body);
    detail_comics.save().then((detail_comics) => {
        res.status(201).send(detail_comics);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

module.exports = router