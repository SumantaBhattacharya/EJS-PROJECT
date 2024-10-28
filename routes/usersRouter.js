const express = require("express");
const router = express.Router();

const {registerUser} = require("../controllers/authController")

// const app = express();

router.get("/", (req, res) => {
  // res.json({ message: "Hello, World!" });
  //  res.sendFile(__dirname + "/index.html");
  res.send("Hello, World!");
});

// /users/register the users path is already defined
router.post("/register", registerUser);

module.exports = router;
