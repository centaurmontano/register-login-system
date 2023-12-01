// Import necessary modules,declaring constants
const express = require('express');              //Used for creating and configuring the server, defining routes, and handling HTTP requests
const path = require('path');                    //Provides utilities for working with file and directory paths
const bcrypt = require('bcrypt');                //a library for hashing passwords securely
const collection = require("./config");          // Assuming this is your MongoDB collection

// Create an instance of Express application. So you can use methods, define routes, handle https methods and start the server
const app = express();

// Middleware setup. A way to configure your application to handle various aspects of incoming requests or to perform actions before they reach your route handlers.      
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set the view engine to EJS. Configures your express app to use EJS as default engine, to render html with embedded js
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route: Render login page
app.get("/", (req, res) => {
    res.render('login');
});

// Route: Render signup page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Route: Render home page
app.get("/home", (req, res) => {
    res.render('home');
});

// Route: Handle user registration
app.post("/signup", async (req, res) => {
    // Extract username and password from the request body
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    try {
        // Hash the user's password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Insert the user data (name and hashed password) into the MongoDB collection
        const userData = await collection.insertMany({
            name: data.name,
            password: hashedPassword
        });

        console.log(userData);
        res.send('User registered successfully');
    } catch (error) {
        // Handle errors during user registration
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

// Route: Handle user login
app.post("/login", async (req, res) => {
    try {
        // Find the user in the MongoDB collection based on the provided username
        const check = await collection.findOne({ name: req.body.username });

        // If the user is not found, send an error message
        if (!check) {
            res.send("User name cannot be found");
        }

        // Compare the hash password from the database with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);

        if (isPasswordMatch) {
            res.redirect("home");
        } else {
            res.send("Wrong password");
        }

    } catch (error) {
        // Handle errors during the login process
        console.error(error);
        res.send("Error during login process");
    }
});

// Set up the server to listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
