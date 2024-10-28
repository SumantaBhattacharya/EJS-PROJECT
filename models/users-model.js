const mongoose = require('mongoose');

// User model
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    card: {
        type: [String],  // Change to an array of strings if needed
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,
    },
    picture: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("User", userSchema);
