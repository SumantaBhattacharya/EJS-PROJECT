const mongoose = require('mongoose');
const config = require("config")
// here the development.json naming is important replace of dotenv

// Debugging middleware
const debug = require("debug")("development:mongoose");

// const config = require("./devlopment.json")

// Log attempt to connect
// console.log("Attempting to connect to MongoDB...");

// Connect to MongoDB
mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
    .then(() => {
        //console.log("Connection successful."); // Log connection success
        debug(`Connected to DB: ${mongoose.connection.name}`); // Log the connected DB name
    })
    .catch((err) => {
        //console.error("Connection error:", err); // Log any connection error
        debug("MONGODB connection failed", err); // Log the debug message for connection failure
        process.exit(1); // Exit the process on failure
    });

// Export the connection for use in other modules
module.exports = mongoose.connection;

// $env:DEBUG='development:*'; nodemon index.js "run this command and all set"
// set DEBUG=development:*
// set DEBUG=   ❌
// $env:DEBUG="" ✔
