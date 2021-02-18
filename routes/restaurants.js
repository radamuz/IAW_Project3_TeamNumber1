const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const User = require('../models/User')
const { ensureAuth, ensureGuest  } = require('../middelware/auth')



//@desc Show Add page
//@route get /restaurants/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('restaurants/add')
})

//@desc Process add form
//@route POST /restaurants
router.post('/', ensureAuth, async (req, res) => {
    try {
        //req.body.user = req.user.id
        const a = req.body.foods
        const splited = a.split(', ')
        req.body.foods = splited
        //console.log(req)
        await Restaurant.create(req.body)
        //console.log(req.body)
        res.redirect('/admin')
    } catch (error) {
        console.error(err)
        res.render('error/500')
    }
})





module.exports = router