const express = require("express")

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index.ejs")
})

module.exports = router

// index.js acts as the main entry point for routing and sets up connections to other route files like ownersRouter.js. 