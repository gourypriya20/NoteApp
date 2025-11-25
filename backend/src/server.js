import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

//cors first and then the remaining 
app.use(cors({
  origin: 'http://localhost:5173' // Allow only Vite frontend to make requests
}));
//middleware
//middleware orders are very important

app.use(express.json()) //allows to get access to {content in the body of each note} - without it body content will be undefined
app.use(rateLimiter);
app.use("/api/notes",notesRoute);

connectDB().then(()=>{
    app.listen(PORT,() => {
        console.log("listening at port",PORT);
    });
});


