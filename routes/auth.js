const express = require('express')
const passport = require('passport')
const router = express.Router()
//const Restaurant = require('../models/restaurant')



//desc Auth With Google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }) )


// Google auth callback
router.get('/google/callback', passport.authenticate('google', { 
    failureRedirect: '/'

}), (req, res) => {
    res.redirect('/contact')
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