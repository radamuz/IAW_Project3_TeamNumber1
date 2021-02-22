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
        // const restaurants = await Restaurant.find().sort({
        //     forks: -1
        // }).limit(5).lean()

        const restaurants = await Restaurant.aggregate([{
            $project: {
                name: 1,
                forks: 1,
                img: 1,
                phone: 1,
                price: 1,
                foods: 1,
                services: 1,
                category: 1,
                address: 1,
                comments: 1,
                stars: {
                    $avg: "$comments.stars"
                }
            }
        }, {
            $sort: {
                forks: -1
            }
        }])


        // Put that they have no customer rating yet
        for (let i = 0; i < restaurants.length; i++) {
            const forRestaurant = restaurants[i]
            
            if (forRestaurant.comments == 0) {
                forRestaurant.stars = 'No customer feedback yet'
            } 
        }

        res.render('home', {
            restaurants
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
        const aboutUs = await Images.find({
            admin: true
        }).lean()
        res.render('about', {
            aboutUs
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
router.get('/admin', ensureAuth, async (req, res) => {

    try {
        const restaurants = await Restaurant.find().sort({
            forks: -1
        }).lean()

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

        res.render('admin', {
            restaurants,
            avgComments,
            layout: 'admin'
        })
    } catch (error) {
        
    }

})


module.exports = router