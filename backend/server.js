const express = require("express");
const dotenv =require("dotenv");    
const{chats} = require("./data/data");
const connectDB = require("./config/db");
const colors = require('colors')
const userRoutes = require('./routes/userRoutes');


dotenv.config();
connectDB();

const app = express();

app.use(express.json());// to accept json data

app.get('/',(req,res)=>{
    res.send("API is running successfully")
});

app.use('/api/user',userRoutes)

// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// });

// app.get("/api/chat/:id",(req,res)=>{
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(SingleChat);
// });

const PORT = process.env.PORT || 5000


app.listen( PORT,console.log('server started on port ${PORT}' .yellow.bold));