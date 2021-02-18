const User = require("../models/User");

module.exports = {
    ensureAuth: async function (req, res, next){
        if(req.isAuthenticated() && res.locals.user.admin ){
            return next()
        }else{
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()){
            res.redirect('/')
        }else{
            return next()
        }
    }
}