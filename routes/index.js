const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Restaurant = require('../models/restaurant')

// @desc    Login/Landing page

// @route   GET /dashboard
router.get('/', ensureGuest, async (req, res) => {
  try {
    const restaurants = await Restaurant.find().lean()
    res.render('home', {
        restaurants
    })
    console.log(restaurants)
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})


// @route   GET /
router.get('/admin', (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

// @desc    Dashboard
// @route   GET /dashboard


module.exports = router