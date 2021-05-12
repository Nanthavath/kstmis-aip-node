const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true

    },
    password: {
        type: String,
        require: true,
        min: 6
    },
    profile: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false,

    }
}, { timestamps: true });

module.exports = mongoose.model("Users", UserSchema);