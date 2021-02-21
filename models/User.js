const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: false
    },
    image: {
        type: Object,
        required: false
    },
    img: {
        type: Object,
        required: false
    },
    files: {
        type: Object,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now  
    }
})

module.exports = mongoose.model('User', UserSchema)