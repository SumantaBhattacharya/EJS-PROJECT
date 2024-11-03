const express = require("express");
const isLoggedIn = require("../middleweres/isLoggedIn");

const Product = require("../models/product-model");
const usersModel = require("../models/users-model");

const router = express.Router();

// the error is going to index.ejs
router.get("/", (req, res) => {
  // res.render("index.ejs")
  const error_msg = req.flash("error_msg"); // Assuming you used connect-flash to set this message
  // If an error message exists, it will be passed to the index.ejs view as a variable named "error"
  const success_msg = req.flash("success_msg");
  // Render the index view and pass the error message to it
  res.render("index.ejs", { error_msg, success_msg, loggedIn: false });
});

// http://localhost:8000/shop
router.get("/shop", isLoggedIn, async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find()
    // .populate('cart');; // Adjust as necessary (e.g., filtering or sorting)

    let success_msg = req.flash("success_msg");
    // Render the shop view and pass the products to it
    res.render("shop", { products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

// http://localhost:8000/cart
router.get("/cart", async (req,res)=>{
  try{
    const products = await Product.find()
    // console.log("products:",products);
    let success_msg = req.flash("success_msg");
    // console.log();
    res.render("cart.ejs",{products, success_msg})
    // res.send("welcome to cart")
  }catch(error){
    console.error("Error fetching cart:", error);
    res.status(500).send("Internal Server Error");
  }
})

// http://localhost:8000/addtocart
router.get("/addtocart/:id", isLoggedIn, async (req, res) => {
  try {
    console.log('Current user:', req.user); // Debugging line to check user

    // Check if req.user is set
    if (!req.user) {
      req.flash("error_msg", "You need to be logged in to add items to your cart.");
      return res.redirect("/login");
    }

    // Fetch user by email
    let user = await usersModel.findOne({ email: req.user.email });
    // .populate('cart.product');
    
    if (!user) {
      req.flash("error_msg", "User not found.");
      return res.redirect("/shop");
    }

    // Add product id to user's cart
    user.cart.push(req.params.id);
    // user.cart.push({ product: req.params.id, quantity: 1 }); // Here quantity is set to 1 explicitly, but it can also be left out if you handle it in the schema
    await user.save();

    console.log("Successful adding product to cart");
    console.log("Updated user cart:", user.cart); // Log updated cart
    req.flash("success_msg", "Product added to cart!");
    return res.json({ success: true, message: 'Product added to cart successfully!' });
    
  } catch (error) {
    console.error("Error adding product to cart:", error);
    req.flash("error_msg", "Failed to add product to cart.");
    return res.json({ success: false, message: 'Product could not be added to cart.' });
  }
});


module.exports = router;

// index.js acts as the main entry point for routing and sets up connections to other route files like ownersRouter.js.
