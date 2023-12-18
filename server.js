// import mongoose from "mongoose"
// import dotenv from 'dotenv'
// dotenv.config()
// import morgan from "morgan"
// import app from "./app.js"
// import { ConnectDB as connectToDB } from "./config/db.config.js"

// const connectDBFunction = connectToDB;

// connectDBFunction();

// const port = process.env.PORT || 8000

// app.listen(port, () => {
//   console.log(`The server is listening at http://localhost:${port}`);
// });

// Importing necessary modules
// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// import morgan from "morgan";
// import app from "./app.js";
// import { connectToDB } from "./config/db.config.js";

// // Loading environment variables
// dotenv.config();

// // Connecting to the database
// connectToDB();

// // Configuring Morgan for logging
// app.use(morgan('dev'));

// // Define the port
// const port = process.env.PORT || 8000;

// // Start the server
// app.listen(port, () => {
//   console.log(`The server is listening at http://localhost:${port}`);
// });

// db.config.js
// import mongoose from "mongoose";

// const connectToDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/mern_stack", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error.message);
//     process.exit(1);
//   }
// };

// export { connectToDB };


import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/your-database-name", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

export { connectToDB };
