const User = require("../models/User");
//&& res.locals.user.admin == 'true'

module.exports = {
    ensureAuth: async function (req, res, next){
        if(req.isAuthenticated() && res.locals.user.admin ){
            // if(res.locals.user.admin){
            //     console.log('por ti adamuz')
            //     return next();
            // }else{
            //     res.redirect('/')
            // }
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