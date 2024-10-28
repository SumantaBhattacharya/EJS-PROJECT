const userModel = require("../models/users-model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Middleware to verify JWT
const {generateToken} = require("../utils/generateToken")

module.exports.registerUser = async (req, res) => {
    try {
      //console.log(req.body); // This will show what you're sending
  
      const { username, email, password } = req.body; // Change fullname to username
  
      // Log inputs
      // console.log("Username:", username); // Check username (previously fullname)
      // console.log("Email:", email);
      // console.log("Password:", password);
  
      if (!username || !email || !password) {
        // Update check to match the variable name
        return res.status(400).json({ message: "Please fill in all fields" });
      }
  
      const user = await userModel.findOne({ username });
      if (user)
        return res.status(400).json({ message: "Username already exists" });
  
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return res.status(500).json({ message: "Error generating salt" });
        }
        bcrypt.hash(password, salt, async function (err, hash) {
          // Store hash in your password DB.
          if (err) {
            return res.send(err.message);
          } else {
            // res.send(hash)
            const newUser = await userModel.create({
              username: username,
              email: email,
              password: hash,
            });
  
            // Generate JWT token
            // const payload = {
            //   user_id: newUser._id,
            //   username: newUser.username,
            //   user_email: newUser.email,
            // };
            // let token = jwt.sign(payload,"your_secret_key",{ expiresIn: "1h" });
  
            let token = generateToken(newUser)
            res.cookie("token", token, { httpOnly: true, secure: true });
            
            res.status(201).send({ message: "User registered successfully!"});
          }
        });
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  }