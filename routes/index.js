const express = require("express");
const isLoggedIn = require("../middleweres/isLoggedIn");

const Product = require("../models/product-model")

const router = express.Router();

// the error is going to index.ejs
router.get("/",(req,res)=>{
    // res.render("index.ejs")
    const error = req.flash("error_msg"); // Assuming you used connect-flash to set this message
    res.render("index.ejs", {error} )
})

// http://localhost:8000/shop
router.get("/shop",isLoggedIn, async (req,res)=>{
    try {
        // Fetch all products from the database
        const products = await Product.find(); // Adjust as necessary (e.g., filtering or sorting)
    
        // Render the shop view and pass the products to it
        res.render("shop", { products });
      } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
      }
})



module.exports = router

// index.js acts as the main entry point for routing and sets up connections to other route files like ownersRouter.js. 