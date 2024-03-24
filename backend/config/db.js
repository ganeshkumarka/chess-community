// // const mongoose = require('mongoose');
// // const connectDB = async () => {
// //   try {
// //     const conn = await mongoose.connect(process.env.MONGO_URI, {
// //       useUnifiedTopology: true,
// //       useNewUrlParser: true,
      
// //     });
// //     console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline);
// //   } catch (error) {
// //     console.error(`Error: ${error.message}` .red.bold);
// //     process.exit(1);
// //   }
// // };

// // module.exports = connectDB;


// const mongoose = require('mongoose');

// // Connection URI for MongoDB Atlas or your local MongoDB instance
// const mongoURI = 'your_mongodb_connection_uri_here';

// // Connect to MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Get the default connection
// const db = mongoose.connection;

// // Event listener for successful MongoDB connection
// db.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// // Event listener for MongoDB connection error
// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// // Export the database connection
// module.exports = db;