import bcrypt from "bcrypt";
import users from "../models/user.js";

export const check_register = async(req,res, next)=>{
    try {
        const {username,email,password,confirm_password} =req.body;
        if(!username) return res.status(400).json({status:400, message:"username is required"});
        if(!email) return res.status(400).json({status:400, message:"email is required"});
        if(!password) return res.status(400).json({status:400, message:"password is required"});
        if(!confirm_password) return res.status(400).json({status:400, message:"confirm_password is required"});
        if(password.length < 8 && confirm_password.length < 8) return res.status(400).json({status:400, message:"password should be of 8 characters"});
        if(password != confirm_password) return res.status(400).json({status:400, message:"password not matched"});
        
        next();
    } catch (error) {
      return res.status(500).json({status:500, message:"unexpected error occured"});  
    }
}

export const check_login = async (req,res,next) =>{
    try {
        const {email,password} = req.body;
        if(!email) return res.status(400).json({status:400, message: "email is required"});
        if(!password) return res.status(400).json({status:400, message: "password is required"});

        const check_user = await users.findOne({email}).exec();
        if(!check_user) return res.status(400).json({status:400, message:"user not found"});

        const dec_pass = await bcrypt.compare(password, check_user.password);
        if(!dec_pass) return res.status(400).json({status:400, message:"wrong credentials"});
        next();
    } catch (error) {
        return res.status(500).json({status:500, message:"unexpected error occured"});
    }
}