const userModel = require("../models/users-model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Middleware to verify JWT
const { generateToken } = require("../utils/generateToken");

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

          let token = generateToken(newUser);
          res.cookie("token", token, { httpOnly: true, secure: true });

          res.status(201).send({ message: "User registered successfully!" });
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Log inputs

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const user = await userModel.findOne({ email });

    // if no user of such name
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // bcrypt.compare has a promise-based form
    // const isMatch = await bcrypt.compare(password, user.password);
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }
      if (result) {
        // Generate JWT token
        let token = generateToken(user);
        res.cookie("token", token, { httpOnly: true, secure: true });
        return res.status(200).json({ message: "User logged in successfully!" });
      }else{
        return res.status(401).json({ message: "Invalid username or password" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while logging in" });
    // res.status(400).json({ message: error.message });
  }
};

module.exports.logoutUser = async (req, res) => {
    res.clearCookie("token", { httpOnly: true, secure: true }); // Clear the cookie
    res.json({ message: "User logged out successfully!" }); // Respond to the client
};

// If your application uses httpOnly and secure attributes when creating the cookie, you should also include them when clearing the cookie to ensure proper handling and security. 