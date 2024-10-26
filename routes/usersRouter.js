const express = require("express");
const router = express.Router();

// const app = express();

router.get("/", (req, res) => {
   // res.json({ message: "Hello, World!" });
  //  res.sendFile(__dirname + "/index.html");
  res.send("Hello, World!");
});

module.exports = router

