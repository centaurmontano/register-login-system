// Create database connection
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");

// Check if the database is connected or not
connect.then(() => {
    console.log("Database connected successfully");
})
.catch(() => {
    console.log("Database connection failed");
});

// Create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a model for the "users" collection
const collection = mongoose.model("users", LoginSchema);

// Export the model for use in other files
module.exports = collection;
