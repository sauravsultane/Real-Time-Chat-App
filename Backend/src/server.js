import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "../src/lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes)

app.get("/", (req,res)=>{
    res.send("Hellow World");
})

app.listen(3000,()=>{
    console.log(`Server is running of port ${PORT} `)
    connectDB();
})