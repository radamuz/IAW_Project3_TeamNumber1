const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

//desc Login/Landin page
//@route get /
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find().sort({forks:-1}).limit(5).lean()
        
        //console.log(Restaurant.find({ }))
        
        res.render('home', {
            restaurants
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }


    
})



module.exports = router