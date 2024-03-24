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
  pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
});

const User = mongoose.model("User", userSchema,"users");
///
const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);
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
    //const pic = req.file ? req.file.buffer : null;

    // Check if name, email, and password are provided
    if (!name || !email || !password ) {
      return res.status(400).json({ message: "Name, email, and password are required" });
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
      pic,
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

//posts

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new post
app.post('/api/posts', async (req, res) => {
  const { content, authorId } = req.body;

  try {
    const author = await User.findById(authorId);
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    const newPost = new Post({ content, author: authorId });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a specific post
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'name');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a post
app.put('/api/posts/:id', async (req, res) => {
  const { content } = req.body;

  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.content = content;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await post.remove();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
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

//const connectDB = require("./config/db");


//gpt server

// const express = require("express");
// const { v4: uuidv4 } = require("uuid");
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
// const mongoose = require('mongoose');

// const jwt = require('jsonwebtoken');

// const uri = "mongodb+srv://admin:adminpassword@cluster0.zopigy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(uri).then(() => console.log('connected')).catch(err => console.log(err));

// const app = express();
// app.use(express.json());

// // Define User Schema
// const userSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   pic: {
//     type: String,
//     required: true,
//     default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
//   },
//   isAdmin: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
// });

// const User = mongoose.model("User", userSchema);

// // Define Post Schema
// // const postSchema = new mongoose.Schema({
// //   content: { type: String, required: true ,default:"nil"},
// //   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true ,default:"nil"},
// //   createdAt: { type: Date, default: Date.now,required:true,default:"nil" }
// // });

// // const Post = mongoose.model('Post', postSchema);

// //new postschema
// const postSchema = new mongoose.Schema({
//   content: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
//   replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
//   votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
// });

// const Post = mongoose.model('Post', postSchema);

// const replySchema = new mongoose.Schema({
//   content: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
//   parentReply: { type: mongoose.Schema.Types.ObjectId, ref: 'Reply' },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
//   votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
// });

// const Reply = mongoose.model('Reply', replySchema);

// const voteSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
//   reply: { type: mongoose.Schema.Types.ObjectId, ref: 'Reply' },
//   vote: { type: Number, required: true, default: 0 }, // -1 for downvote, 1 for upvote
//   createdAt: { type: Date, default: Date.now },
// });

// const Vote = mongoose.model('Vote', voteSchema);


// const notificationSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   message: { type: String, required: true },
//   link: { type: String, required: true }, // URL to the post/reply
//   isRead: { type: Boolean, default : false },
//   createdAt: { type: Date, default: Date.now },
// });

// const Notification = mongoose.model('Notification', notificationSchema);


// // Login Endpoint
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email" });
//     }

//     if (password !== user.password) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.status(200).json({ message: "Login successful" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Register new user Endpoint
// app.post("/api/add-user", async (req, res) => {
//   try {
//     const { pic, name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "Name, email, and password are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const userId = generateUserId(name);
//     const newUser = new User({
//        userId,
//       name,
//       email,
//       password,  
//       pic,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Function to generate a user ID based on name
// function generateUserId(name) {
//   const cleanedName = name.toLowerCase().replace(/\s/g, '');
//   const hash = crypto.createHash('sha256');
//   hash.update(cleanedName);
//   const hex = hash.digest('hex');
//   const userId = hex.slice(0, 8);
//   const randomDigit = Math.floor(Math.random() * 10);
//   return userId + randomDigit;
// }

// // Fetch all posts Endpoint


// // Create a new post Endpoint
// // app.post('/api/posts', async (req, res) => {
// //   const { content, authorId } = req.body;

// //   try {
// //     const author = await User.findById(authorId);
// //     if (!author) {
// //       return res.status(404).json({ message: 'Author not found' });
// //     }

// //     const newPost = new Post({ content, author: authorId });
// //     const savedPost = await newPost.save();
// //     res.status(201).json(savedPost);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // });

// app.post('/api/posts', async (req, res) => {
  
//   try {
//     const { content, author } = req.body;  
//     console.log(content);
//     const user = await User.findById(author);
//     if (!user) {
//       return res.status(404).json({ message: 'Author not found' });
//     }

//     const newPost = new Post({ content, author });
//     const savedPost = await newPost.save();

//     res.status(201).json(savedPost);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// });

// app.get('/api/posts', async (req, res) => {
//   const { page = 1, sortOrder = 'desc', searchTerm = '' } = req.query;
//   const limit = 10;
//   const skip = (page - 1) * limit;
//   const sortQuery = sortOrder === 'desc' ? { createdAt: -1 } : { createdAt: 1 };
//   const searchQuery = searchTerm ? { content: { $regex: searchTerm, $options: 'i' } } : {};

//   try {
//     const posts = await Post.find(searchQuery)
//       .populate('author', 'name pic')
//       .sort(sortQuery)
//       .skip(skip)
//       .limit(limit);

//     const totalPosts = await Post.countDocuments(searchQuery);
//     const totalPages = Math.ceil(totalPosts / limit);

//     res.json({ posts, totalPages, currentPage: page });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Get a specific post Endpoint
// app.get('/api/posts/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const post = await Post.findById(id)
//       .populate('author', 'name pic')
//       .populate({
//         path: 'replies',
//         populate: {
//           path: 'author',
//           select: 'name pic',
//         },
//       });

//     if (!post) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// // Update a post Endpoint
// app.put('/api/posts/:id', async (req, res) => {
//   const { id } = req.params;
//   const { content } = req.body;

//   try {
//     const post = await Post.findById(id);
//     if (!post) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     post.content = content;
//     post.updatedAt = Date.now();
//     const updatedPost = await post.save();

//     res.json(updatedPost);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a post Endpoint
// app.delete('/api/posts/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const post = await Post.findById(id);
//     if (!post) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     await post.remove();
//     res.json({ message: 'Post deleted' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // User Profile Endpoint
// app.get("/api/user/:email", async (req, res) => {
//   const email = req.params;
  
//   try {
//     console.log(email)
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.put('/api/users/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, pic } = req.body;

//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.name = name || user.name;
//     user.pic = pic || user.pic;
//     const updatedUser = await user.save();

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// app.get("/api/user/:email/posts", async (req, res) => {
//   const email = req.params.email;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Fetch posts authored by the user
//     const posts = await Post.find({ author: user._id }).populate("author", "name");
//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


// // Create a new reply
// app.post('/api/replies', async (req, res) => {
//   const { content, post, author } = req.body;

//   try {
//     const user = await User.findById(author);
//     if (!user) {
//       return res.status(404).json({ message: 'Author not found' });
//     }

//     const existingPost = await Post.findById(post);
//     if (!existingPost) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     const newReply = new Reply({ content, author, post });
//     const savedReply = await newReply.save();

//     existingPost.replies.push(savedReply._id);
//     await existingPost.save();

//     res.status(201).json(savedReply);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// });


// // Vote on a post or reply
// app.post('/api/votes', async (req, res) => {
//   const { post, reply, user, vote } = req.body;

//   try {
//     const existingUser = await User.findById(user);
//     if (!existingUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     if (post) {
//       const existingPost = await Post.findById(post);
//       if (!existingPost) {
//         return res.status(404).json({ message: 'Post not found' });
//       }

//       const existingVote = existingPost.votes.find((v) => v.user.toString() === user);

//       if (existingVote) {
//         if (existingVote.vote === vote) {
//           // Remove the existing vote
//           existingPost.votes = existingPost.votes.filter((v) => v.user.toString() !== user);
//         } else {
//           // Update the existing vote
//           existingPost.votes = existingPost.votes.map((v) => (v.user.toString() === user ? { ...v, vote } : v));
//         }
//       } else {
//         // Add a new vote
//         existingPost.votes.push({ user, vote });
//       }

//       await existingPost.save();
//     } else if (reply) {
//       const existingReply = await Reply.findById(reply);
//       if (!existingReply) {
//         return res.status(404).json({ message: 'Reply not found' });
//       }

//       const existingVote = existingReply.votes.find((v) => v.user.toString() === user);

//       if (existingVote) {
//         if (existingVote.vote === vote) {
//           // Remove the existing vote
//           existingReply.votes = existingReply.votes.filter((v) => v.user.toString() !== user);
//         } else {
//           // Update the existing vote
//           existingReply.votes = existingReply.votes.map((v) => (v.user.toString() === user ? { ...v, vote } : v));
//         }
//       } else {
//         // Add a new vote
//         existingReply.votes.push({ user, vote });
//       }

//       await existingReply.save();
//     } else {
//       return res.status(400).json({ message: 'Either post or reply is required' });
//     }

//     res.status(200).json({ message: 'Vote successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






// //chatapp

// const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// const path = require("path");

// //dotenv.config();
// //connectDB();
// //const app = express();

// app.use(express.json()); // to accept json data

// // app.get("/", (req, res) => {
// //   res.send("API Running!");
// // });

// app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);
// app.get('/api/users', async (req, res) => {
//   try {
//     // Fetch all users from the database
//     const users = await person.find();
//     res.json(users); // Send the user data as JSON response
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     res.status(500).json({ error: 'Failed to fetch user data' });
//   }
// });

// // --------------------------deployment------------------------------

// // const __dirname1 = path.resolve();

// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname1, "/frontend/build")));

// //   app.get("*", (req, res) =>
// //     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
// //   );
// // } else {
// //   app.get("/", (req, res) => {
// //     res.send("API is running..");
// //   });
// // }

// // --------------------------deployment------------------------------

// // Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

// //const PORT = process.env.PORT;

// // const server = app.listen(
// //   PORT,
// //   console.log(`Server running on PORT ${PORT}...`.yellow.bold)
// // );

// const http = require('http');
// const socketIo = require('socket.io');
// const server = http.createServer(app); // Create HTTP server
// //const io = socketIo(server);

// const io = require("socket.io")(server, {
//   pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000",
//     // credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log("Connected to socket.io");
//   socket.on("setup", (userData) => {
//     socket.join(userData._id);
//     socket.emit("connected");
//   });

//   socket.on("join chat", (room) => {
//     socket.join(room);
//     console.log("User Joined Room: " + room);
//   });
//   socket.on("typing", (room) => socket.in(room).emit("typing"));
//   socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

//   socket.on("new message", (newMessageRecieved) => {
//     var chat = newMessageRecieved.chat;

//     if (!chat.users) return console.log("chat.users not defined");

//     chat.users.forEach((user) => {
//       if (user._id == newMessageRecieved.sender._id) return;

//       socket.in(user._id).emit("message recieved", newMessageRecieved);
//     });
//   });

//   socket.off("setup", () => {
//     console.log("USER DISCONNECTED");
//     socket.leave(userData._id);
//   });
// });
