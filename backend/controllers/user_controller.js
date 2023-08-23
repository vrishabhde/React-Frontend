import users from "../models/user.js"
import bcrypt from "bcrypt";


export const register = async(req,res) => {
    try {
        const {email,username,password } = req.body;
        const checkuser = await users.find({email}).exec();
        if(checkuser.length) return res.status(400).json({status: 400, message:"user already registered"});

        const hashpassword = await bcrypt.hash(password,10);

        const newuser = new users({
            username,email,
            password:hashpassword
        })
        await newuser.save();
        return res.status(200).json({status:200, message:"registration success"});

    } catch (error) {
        return res.status(500).json({status:500,message:"unexpected error occured"});
    }
}



export const login = async(req,res) => {
    try {
        return res.status(200).json({status:200, message:"login successfull"});
    } catch (error) {
        return res.status(500).json({status:500, message:"unexpected error occured"});
    }
}


// var a = 2;
// let a=2;
// const a= 2;
// console.log(a)  
 


