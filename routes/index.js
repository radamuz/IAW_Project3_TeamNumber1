const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

//desc Home Page
//@route get /
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find().sort({forks:-1}).limit(5).lean()

        const aa = await Restaurant.aggregate([
            { 
                $project: {
                     stars: { $avg: "$comments.stars"}
                     
                     }
         
             }
         ])
        console.log(aa)
        
        
        res.render('home', {
            restaurants,aa
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }


    
})

//desc About Page
router.get('/about', (req, res) => {
    res.render('about')
})

//desc About Page
router.get('/contact', (req, res) => {
    res.render('contact')
})





module.exports = router