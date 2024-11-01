const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config")
const productModel = require("../models/product-model")

// const app = express();

// /owners/products/create
// /products/create
// http://localhost:8000/products/create
router.post("/create", upload.single('image'), async (req, res) => {
   //  res.sendFile(__dirname + "/index.html");
   // res.send(req.file)// file upload in the memory but not saved in the database

   // save the file in the database here
   // db.collection("products").insertOne(req.body)
   //    .then(result => {
   //        res.json({ message: "Product created successfully", product: result.ops[0] });
   //     })
   //    .catch(error => {
   //         console.error(error);
   //         res.status(500).json({ message: "Failed to create product" });
   //     });

   await productModel.create(req.body)

   res.json({ message: "Product created successfully", product: req.file });
   res.send("Product created successfully");
});

module.exports = router

