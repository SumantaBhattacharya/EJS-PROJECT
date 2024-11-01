const express = require("express");
const router = express.Router();

const ownerModel = require("../models/admin-model")

// const app = express();

// if (process.env === "development") {}

// console.log(process.env.NODE_ENV);// initially it is undefined
// after $env:NODE_ENV="development"

console.log(process.env.NODE_ENV === "development"); // returns true

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    //console.log("hey its working");
    //res.send("Owner created successfully"); // Respond to the client
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
      .status(403)
      .send("You don't have permission to create a new owner")
    }

    // Example values from request body or hardcoded values
    const { fullname, email, password} = req.body;

    const createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    })
    res.status(201).send({ message: "Owner created successfully", owner: createdOwner });

  });
}

router.get("/", (req, res) => {
  // res.json({ message: "Hello, World!" });
 //  res.sendFile(__dirname + "/index.html");
 res.send("Hello, World!");
});

// /owners/admin
// C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH\views\createproducts.ejs
// http://localhost:8000/owners/admin
router.get("/admin",(req,res)=>{
  res.render("createproducts.ejs")
  // res.send("Hello, Admin!");
})


module.exports = router

// process.env
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH> $env:NODE_ENV="development"
// saved in memory
/*
development
Server running at http://localhost:8000
  development:mongoose Connected to DB: scatch +0ms
*/

// $env:NODE_ENV="production"

/*

http://localhost:8000/owners/create

{
    "message": "Owner created successfully",
    "owner": {
        "fullname": "Sumanta Bhattacharya",
        "email": "sumanta2004@gmail.com",
        "password": "CJnm@#9501",
        "products": [],
        "_id": "671e642ec8753552c9c561ab",
        "createdAt": "2024-10-27T16:02:54.756Z",
        "updatedAt": "2024-10-27T16:02:54.756Z",
        "__v": 0
    }
}

*/

/*
/ -> signup or login
/shop -> shop
/users/cart -> cart
/admin -> admin panel
/owner/product -> show all product
/owner/admin -> show admin panel to create product
*/