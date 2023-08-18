import mongoose from "mongoose";
import { Schema } from "mongoose";

const adduser = new Schema({
    username: {
        required:true,
        type:String,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
})

export default mongoose.model("users", adduser);