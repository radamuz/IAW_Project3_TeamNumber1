const express = require('express')
const router = express.Router()

//desc Login/Landin page
//@route get /
router.get('/', (req, res) => {
    res.render('home')
})

//desc Dashboard
//@route get /dashboard
/*router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})*/

module.exports = router