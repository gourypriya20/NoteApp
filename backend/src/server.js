import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
//cors first and then the remaining 
if (process.env.NODE_ENV !== "production"){
  app.use(cors({
    origin: 'http://localhost:5173' // Allow only Vite frontend to make requests
  }));
}

//middleware
//middleware orders are very important

app.use(express.json()) //allows to get access to {content in the body of each note} - without it body content will be undefined
app.use(rateLimiter);
app.use("/api/notes",notesRoute);

app.use(express.static(path.join(__dirname,"../frontend/dist")));

if(process.env.NODE_ENV === "production" ){
  app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontent","dist","index.html"))
  });
}


connectDB().then(()=>{
    app.listen(PORT,() => {
        console.log("listening at port",PORT);
    });
});


