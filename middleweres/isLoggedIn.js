const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const userModel = require("../models/users-model");

// const authenticateToken = async (req, res, next) => {
// module.exports.authenticateToken

module.exports = async (req, res, next) => {

  // Gather the token from the request header
  //  const token = req.headers.authorization.split(" ")[1]

  // Check if the token is not valid
  //if (!token) return res.status(403).send("Access denied. No token provided.")

  if (!req.cookies.token) {
    req.flash("error", "You need to login first");
    return res.redirect("/");
  }

  try {
    // Verify the token using the secret key
    const verified = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    // const decoded = jwt.verify(token, process.env.JWT_KEY);
    
    // If the token is expired, throw an error
    // if (error.name === "TokenExpiredError") {
    //   return res.status(403).send("Access denied. Token has expired.")
    // }

    // If the token has expired, handle it explicitly
    //   if (Date.now() >= decoded.exp * 1000) {
    //     req.flash("error", "Access denied. Token has expired.");
    //     return res.redirect("/");
    //   }

    // If the token is invalid, throw an error
    // if (!decoded.id) throw new Error()

    // If the token is valid, add the user ID to the request object
    // req.userId = decoded.id

    // Check if the user exists in the database
    /*const user = await userModel.findById(req.userId)
    if (!user) return res.status(403).send("Access denied. User not found.")*/

    // Check if the user exists in the database
    const user = await userModel.findById(verified.user_id).select("-password"); // Accessing user_id from token
    // const user = await userModel.findOne({email: decoded.email}).select("-password");

    if (!user) {
      req.flash("error_msg", "Access denied. User not found.");
      // console.error("User not found for the token ID:", verified.user_id);
      return res.redirect("/");
    }

    // If the user exists, add the user object to the request object
    req.user = user;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Token verification failed:", error); // Log the error
    req.flash("error_msg", "Access denied. Invalid token.");
    res.redirect("/");
  }
};


// Flash messages allow you to store messages in session storage that can be displayed to users on the next request.
/*
  Requirements for Using Flash Messages
  npm install express-session connect-flash

  const session = require('express-session');
  const flash = require('connect-flash');

  // Set up session middleware
app.use(session({
    secret: 'your_secret_key', // Replace with a secure random key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Initialize flash
app.use(flash());

// Middleware to make flash messages accessible in views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

Display Flash Messages in Views: In your EJS templates, you can display flash messages like this:

<% if (success_msg.length > 0) { %>
    <div class="alert alert-success"><%= success_msg %></div>
<% } %>
<% if (error_msg.length > 0) { %>
    <div class="alert alert-danger"><%= error_msg %></div>
<% } %>

 */
