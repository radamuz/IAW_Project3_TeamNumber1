const fileUpload = require('express-fileupload')
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const User = require('../models/User')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const { ensureAuth, ensureGuest } = require('../middelware/auth')
router.use(fileUpload())


//@desc Show Add page
//@route get /restaurants/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('restaurants/add')
})


//@desc Process add form
//@route POST /restaurants
router.post('/', ensureAuth, async (req, res) => {
    try {
        console.log(req);
        const foodsArray = req.body.foods
        const splited = foodsArray.split(/[,][\s]|[,]/)
        const serv = req.body.services
        const servSplited = serv.split(/[,][\s]|[,]/)
        const cuisineType = req.body.cuisineType
        const cuisineTypeSplited = cuisineType.split(/[,][\s]|[,]/)
        const adres = new Object()
        adres.addressLocality = req.body.addressLocality
        adres.addressRegion = req.body.addressRegion
        adres.postalCode = req.body.postalCode
        adres.streetAddress = req.body.streetAddress
        adres.loc = new Array()
        adres.loc[0] = req.body.loc0
        adres.loc[1] = req.body.loc1
        req.body.foods = splited
        req.body.services = servSplited
        req.body.address = adres
        req.body.cuisineType = cuisineTypeSplited

        // Upload a image
        // console.log(req);
        let EDFile = req.files.img1
        EDFile.mv(`./public/img/${EDFile.name}`,err => {
            if(err) 
            console.log('ERROR 200 or 500 uploading image')
            // console.log(res.status(500))
            // console.log(res.status(200))
        })

        req.body.img1 = `img/${EDFile.name}`
        
        // Upload a second image
        // console.log(req);
        let EDFile2 = req.files.img2
        EDFile2.mv(`./public/img/${EDFile2.name}`,err => {
            if(err) 
            console.log('ERROR 200 or 500 uploading image')
            // console.log(res.status(500))
            // console.log(res.status(200))
        })

        req.body.img2 = `img/${EDFile2.name}`

        req.body.img = new Array()
        req.body.img[0] = req.body.img1
        req.body.img[1] = req.body.img2

        req.body.timetable = new Array()
        req.body.timetable[0] = new Array()
        req.body.timetable[0][0] = req.body.timetable00
        req.body.timetable[0][1] = req.body.timetable01
        req.body.timetable[1] = new Array()
        req.body.timetable[1][0] = req.body.timetable10
        req.body.timetable[1][1] = req.body.timetable11
        req.body.timetable[2] = new Array()
        req.body.timetable[2][0] = req.body.timetable20
        req.body.timetable[2][1] = req.body.timetable21
        req.body.timetable[3] = new Array()
        req.body.timetable[3][0] = req.body.timetable30
        req.body.timetable[3][1] = req.body.timetable31
        req.body.timetable[4] = new Array()
        req.body.timetable[4][0] = req.body.timetable40
        req.body.timetable[4][1] = req.body.timetable41
        req.body.timetable[5] = new Array()
        req.body.timetable[5][0] = req.body.timetable50
        req.body.timetable[5][1] = req.body.timetable51
        req.body.timetable[6] = new Array()
        req.body.timetable[6][0] = req.body.timetable60
        req.body.timetable[6][1] = req.body.timetable61

        console.log(req.body.timetable);

        await Restaurant.create(req.body)
        res.redirect('/admin')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})


//@desc Show single restaurant
//@route get /restaurants/:id
router.get('/:id', async (req, res) => {
    try {
        let singleRest = await Restaurant.findById(req.params.id)
            .lean()

        let singleRestStars = await Restaurant.aggregate([{
            $project: {
                stars: {
                    $avg: "$comments.stars"
                }
            }
        }, {
            $match: {
                _id: ObjectId(req.params.id)
            }
        }])

        singleRestStars0 = singleRestStars[0].stars

        if (!singleRest) {
            return res.render('error/404')
        }

        res.render('restaurants/show', {
            singleRestStars0,
            singleRest,
            layout: 'singleRest'
        })
    } catch (err) {
        console.error(err)
        res.render('error/404')
    }
})


module.exports = router