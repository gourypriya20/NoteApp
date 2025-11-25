import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully!");
    }catch(error){
        console.error("error connecting to mongodb", error);
        process.exit(1) //status code for exit with failure if 0 success
    }
}