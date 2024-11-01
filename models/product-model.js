const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: Buffer,
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

// Buffer has a hexadecimal value
/*
 CPU is an Intel Pentium G3258 with 2 cores and a maximum clock speed of 3.2 GHz.
 monitor, it’s a Dell S2240L. This monitor model typically uses an IPS (In-Plane Switching) panel

 Samsung SSD 850 EVO 120GB:
 Size: 120 GB
 TS128GSSD370S:
 Size: 128 GB

 NVIDIA GeForce GT 610
 Adapter RAM: 2 GB (2147483648 bytes)
 Current Horizontal Resolution: 1920 pixels
 Current Vertical Resolution: 1080 pixels
 Current Resolution: 1920 x 1080 pixels
 Current Refresh Rate: 60 Hz
 Max Refresh Rate: 75 Hz
 Driver Version: 23.21.13.9135
 Video Memory Type: Integrated RAMDAC
 Video Architecture: Version 5
 Driver Date: 23-03-2018
 Monitor Information
 Active: True (the monitor is active)
 Max Horizontal Image Size: 48 cm
 Max Vertical Image Size: 27 cm
 Video Input Type: Analog

 
*/