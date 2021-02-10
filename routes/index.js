const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

//desc Home Page
//@route get /
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find().sort({forks:-1}).limit(5).lean()

        const avgComments = await Restaurant.aggregate([
            { 
                $project: {
                     stars: { $avg: "$comments.stars"}
                     }
             }
         ])

        // Enter average comments in each of the restaurants
        for (let i = 0; i < restaurants.length; i++) {
            const forRestaurant = restaurants[i];
            // console.log(forRestaurant);
            const forAvgComment = avgComments[i]
            forRestaurant.stars = forAvgComment.stars
            // console.log(forRestaurant.stars);
            console.log(forRestaurant);
        }
        
        res.render('home', {
            restaurants,avgComments
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