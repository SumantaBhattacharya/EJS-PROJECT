const express = require("express")

const app = express()


const cookieParser = require("cookie-parser")
const path = require("path")

const db = require("./config/mongoose-connection")

const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")
const indexRouter = require("./routes/index")

require('dotenv').config();

// Middleware
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

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

