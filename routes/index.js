const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

//desc Home Page
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
const aa = await Restaurant.aggregate([
    { 
        $project: {
             quizAvg: { $avg: "$comments.stars"}
             
             }
 
     }
 ]).lean()
 console.log(aa);
//desc About Page
router.get('/about', (req, res) => {
    res.render('about')
})

//desc About Page
router.get('/contact', (req, res) => {
    res.render('contact')
})





module.exports = router