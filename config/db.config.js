import mongoose from "mongoose";

export const ConnectDB = async()=>{

    try{
        await mongoose.connect('mongodb://localhost:27017/mernproject')

        console.log('THE DB IS CONNECTED WITH ${mongooose.connection.host}');
    }
    catch(error)
    {
        await mongoose.disconnect()
        process.exit(1)
    }
}

// './config/db.config.js'

// export async function ConnectDB() {
//   // Your database connection logic here
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error.message);
//     // Handle the error appropriately
//   }
// }
