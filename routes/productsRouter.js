const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

// const app = express();

// /owners/products/create
// /products/create
// http://localhost:8000/products/create
router.post("/create", upload.single("image"), async (req, res) => {
  //  res.sendFile(__dirname + "/index.html");
  // res.send(req.file)// file upload in the memory but not saved in the database
  // console.log(req.file)

  try {

  let {name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

  // validate the request data here
   // if (!name || !price || !discount) {
   if (!req.body.name ||!req.body.price) {
       return res.status(400).json({ message: "Missing required fields" });
   }

  // save the file in the database here
  /*db.collection("products").insertOne(req.body)
      .then(result => {
          res.json({ message: "Product created successfully", product: result.ops[0] });
       })
      .catch(error => {
           console.error(error);
           res.status(500).json({ message: "Failed to create product" });
       });*/

  let product = await productModel.create({
    // ...req.body,
    // image: req.file.path,
    // image: req.file.filename, // if you want to save the filename instead of the path

    image: req.file.buffer,
    //  name: req.body.name,
    //  price: req.body.price,
    //  discount: req.body.discount,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });

  // The error ERR_HTTP_HEADERS_SENT occurs when you try to send multiple responses in a single request. 
  // res.json({ message: "Product created successfully", product: req.file });
  // res.send("Product created successfully");
  
  req.flash("success_msg", "Product created successfully.");
  res.redirect("/shop")

  }catch(error){
   // console.error("Error creating product:", error);
   req.flash("error_msg", "Failed to create product: " + error.message);
   res.redirect("/owners/admin");
   // Send an error response
   // res.status(500).json({ message: "Failed to create product", error: error.message });
  }

});

module.exports = router;

// PS C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH> $env:NODE_ENV="development"
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH> $env:DEBUG='development:*'; nodemon index.js
