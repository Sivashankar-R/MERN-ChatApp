import mongoose from "mongoose";

const connectDB = async (req, res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected")
    } catch (error) {
        console.log("Error: ", error.message);
    }
    
}
export default connectDB;