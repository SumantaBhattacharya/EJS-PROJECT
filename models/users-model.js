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
    cart: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
    }],    
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
