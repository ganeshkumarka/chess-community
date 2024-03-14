const express = require("express");
const dotenv =require("dotenv");    
//const{chats} = require("./data/data");
//const connectDB = require("./config/db");
//const colors = require('colors')
//const userRoutes = require('./routes/userRoutes');
const bcrypt = require('bcryptjs');

const mongoose=require('mongoose')
const uri="mongodb+srv://admin:adminpassword@cluster0.zopigy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri).then((err,res)=>{
    if(err){
        console.log(err)
    }
    console.log('connected')

})


//dotenv.config();
//connectDB();

const app = express();

app.use(express.json());// to accept json data

// app.get('/',(req,res)=>{
//     res.send("API is running successfully")
// });

//app.use('/api/user',userRoutes)






// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// });

// app.get("/api/chat/:id",(req,res)=>{
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(SingleChat);
// });
//app.listen( PORT,console.log('server started on port ${PORT}' .yellow.bold));

// Define User Schema
const userSchema = new mongoose.Schema({
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

// Endpoint to add details
// app.post("/api/add-user", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if email and password are provided
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create a new User document
//     const newUser = new User({
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

app.post("/api/add-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if name, email, and password are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new User document
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the new User document to the database
    await newUser.save();

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

