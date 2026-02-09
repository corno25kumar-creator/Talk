import mongoose from 'mongoose'

// to connect the mongo db 
import { setServers } from "node:dns/promises";
setServers(["8.8.8.8", "8.8.4.4"]); 
// Force Node to use Google DNS


export const connectDb = async () => {
  try {
    const dataBase = process.env.DB_URL;
    
    const instance = await mongoose.connect(dataBase);
    console.log(`✅ MongoDB Connected: ${instance.connection.host}`);

  } catch (error) {
    console.error("❌ Connection Details:");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
  }
};