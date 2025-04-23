import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Make sure this line is included

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};

export default connectToDatabase;
