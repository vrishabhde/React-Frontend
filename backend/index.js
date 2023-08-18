import express, { urlencoded } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors"
import router from "./routes/user_routes.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use("/api/v1",router);
app.use(urlencoded( {extended:true}));

mongoose.connect(process.env.MONGO)
.then(() => console.log("db connected"))
.catch((err) => console.log("db error=>", err))
app.listen(process.env.PORT)