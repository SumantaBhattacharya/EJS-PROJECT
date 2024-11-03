const express = require("express")

const app = express()


const cookieParser = require("cookie-parser")
const path = require("path")

const db = require("./config/mongoose-connection")

const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")
const indexRouter = require("./routes/index")

const session = require('express-session');
const flash = require('connect-flash');

// require('dotenv').config();
require('dotenv').config({ path: './.env' });
//console.log(process.env);  // Check if EXPRESS_SESSION_SECRET is listed here

// Middleware
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

// When rendering your view, ensure that you are not caching it. This can sometimes cause issues with displaying updated messages. 
// Disable view caching (for development)
app.set('view cache', false);

// Initialize session middleware
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: false } // Change to true in production with HTTPS
}));

// console.log("Session Secret:", process.env.EXPRESS_SESSION_SECRET);

// Initialize flash
app.use(flash());

// Middleware to make flash messages accessible in views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

app.use("/owners", ownersRouter);
// C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH\routes\ownersRouter.js
app.use("/users", usersRouter);
// C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH\routes\usersRouter.js
app.use("/products", productsRouter);
// C:\Users\SUDIP BHATTACHARYA\Desktop\EJS PROJECT\SCATCH\routes\productsRouter.js
app.use("/", indexRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => { // middleware
    console.log(`Server running at http://localhost:${port}`);
});

/*
$env:NODE_ENV="development"
$env:DEBUG='development:*'; nodemon index.js
*/