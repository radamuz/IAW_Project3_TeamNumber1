const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

//@desc Home Page
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

            const forAvgComment = avgComments[i]

            forRestaurant.stars = forAvgComment.stars
        }
        
        res.render('home', {
            restaurants,avgComments
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }


    
})

<<<<<<< HEAD
//desc Login Page
router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})


//desc About Page
=======
//@desc About Page
//@route get /about
>>>>>>> ed0829f4d006808b6fde6a1f26bc288323f66433
router.get('/about', (req, res) => {
    res.render('about')
})

//@desc Contact Page
//@route get /contact
router.get('/contact', (req, res) => {
    res.render('contact')
})

//@desc Login Page
//@route get /login
router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})



module.exports = router