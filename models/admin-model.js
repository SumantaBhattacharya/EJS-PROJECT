const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost/myDatabase", { useNewUrlParser: true, useUnifiedTopology: true })

const adminSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: Number,
    products:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Product"
        type: Array,
        default: []
    },
    picture: String,
    gstin: String
},{
    timestamps: true
})

module.exports = mongoose.model("Admin", adminSchema)