const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const Images = require('../models/User')
const {
    ensureAuth,
    ensureGuest
} = require('../middelware/auth')

//@desc Home Page
//@route get /
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find().sort({
            forks: -1
        }).limit(5).lean()

        const avgComments = await Restaurant.aggregate([{
            $project: {
                stars: {
                    $avg: "$comments.stars"
                }
            }
        }])

        // Enter average comments in each of the restaurants
        for (let i = 0; i < restaurants.length; i++) {
            const forRestaurant = restaurants[i];

            const forAvgComment = avgComments[i]

            forRestaurant.stars = forAvgComment.stars
        }

        res.render('home', {
            restaurants,
            avgComments
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }



})

//@desc About Page
//@route get /about
router.get('/about', async (req, res) => {

    try {
        const imagesArray = await Images.find({ admin:true }).lean()
        res.render('about', {
            imagesArray
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//@desc Contact Page
//@route get /contact
router.get('/contact', (req, res) => {
    res.render('contact')
})

//@desc Login Page
//@route get /login
router.get('/login', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})


//@desc Admin Page
//@route get /admin
router.get('/admin', ensureAuth, (req, res) => {
    res.render('admin', {
        layout: 'admin'
    })
})


module.exports = router