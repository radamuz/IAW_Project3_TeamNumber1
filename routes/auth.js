const express = require('express')
const passport = require('passport')
const router = express.Router()

//@desc Auth with Google
//@route get /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc Google auth callback
//@route get /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/admin')
})

//@desc Logout user
//@route get /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })


module.exports = router