const express = require("express");
const dotenv =require("dotenv");    
const { v4: uuidv4 } = require("uuid");
//const connectDB = require("./config/db");
//const colors = require('colors')
//const userRoutes = require('./routes/userRoutes');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const mongoose=require('mongoose')
const uri="mongodb+srv://admin:adminpassword@cluster0.zopigy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri).then((err,res)=>{
    if(err){
        console.log(err)
    }
    console.log('connected')

})
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));



//dotenv.config();
//connectDB();

const app = express();

app.use(express.json());// to accept json data


// Define User Schema
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema,"users");

// Login Endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Compare passwords
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Password is valid, so login successful
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// app.post("/api/add-user", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if name, email, and password are provided
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "Name, email, and password are required" });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create a new User document
//     const newUser = new User({
//       name,
//       email,
//       password,
//     });

//     // Save the new User document to the database
//     await newUser.save();

//     res.status(201).json({ message: "User added successfully", user: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

//new add user

// Function to generate a user ID based on name
function generateUserId(name) {
  // Convert name to lowercase and remove any whitespace
  const cleanedName = name.toLowerCase().replace(/\s/g, '');

  // Create a hash using the cleaned name
  const hash = crypto.createHash('sha256');
  hash.update(cleanedName);

  // Convert the hash to a hexadecimal string
  const hex = hash.digest('hex');

  // Take the first 8 characters of the hexadecimal string
  const userId = hex.slice(0, 8);

  // Append a random digit to the user ID
  const randomDigit = Math.floor(Math.random() * 10);

  return userId + randomDigit;
}

// Endpoint to register a new user
app.post("/api/add-user", async (req, res) => {
  try {
    const { pic,name, email, password } = req.body;

    // Check if name, email, and password are provided
    if (!name || !email || !password || !pic ) {
      return res.status(400).json({ message: "Pic,Name, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate userId based on the user's name
     const userId = generateUserId(name);
    //const userId=123;
    // Create a new User document
    const newUser = new User({
    pic
      userId,
      name,
      email,
      password,
    });

    // Save the new User document to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//userpage
// User Profile Endpoint
// // Backend server code (server.js)

// User Profile Endpoint
app.get("/api/user/:email", async (req, res) => {
  const email = req.params.email;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user information
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

