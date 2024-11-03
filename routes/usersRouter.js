const express = require("express");
const router = express.Router();

const {registerUser,loginUser,logoutUser} = require("../controllers/authController")

// const app = express();

router.get("/", (req, res) => {
  // res.json({ message: "Hello, World!" });
  //  res.sendFile(__dirname + "/index.html");
  res.send("Hello, World!");
});

// /users/register the users path is already defined
router.post("/register", registerUser);

router.post("/login",loginUser)

// /users/logout the users path is already defined
router.get("/logout",logoutUser)

// Export the router for use in the index.js file
module.exports = router;
