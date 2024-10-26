const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        // required: false,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String

},{
    timestamps: true,
    // versionKey: false
})

module.exports = mongoose.model('Product', productSchema);

