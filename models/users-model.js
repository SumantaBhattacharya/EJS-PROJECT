const mongoose = require('mongoose');

// Import the DB_NAME constant from the contants.js file
// const DB_NAME = require('../contants.js');

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`mongodb://127.0.0.1:27017/scatch`);
//         console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
//         console.log(`Connected to DB: ${mongoose.connection.name}`); // Log the connected DB name
//     } catch (err) {
//         console.log("MONGODB connection failed", err);
//         process.exit(1);
//     }
// };

// usermodel
// full name - string
// email - string
// password - string
// card - array
// isadmin - boolean
// orders - array
// contact - number
// picture - db

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    card: {
        type: String,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    orders: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("User", userSchema)

// Export the connectDB function
// module.exports = connectDB;
