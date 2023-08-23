// import { useNavigate } from "react-router-dom";
import axios from "axios";


import { useState } from "react";

const Register = () => {

    const [userdata, setuserdata] = useState({username:"",email:"",password:"",confirm_password:""});

    const handlechange =(e) => {
        setuserdata({...userdata, [e.target.name]: e.target.value})
    }
    console.log(userdata);

    const handlesubmit = async(e)=>{
        e.preventDefault();

        if(userdata.username && userdata.email && userdata.password && userdata.confirm_password ){

        const post_response = await axios.post("http://localhost:2003/api/v1/register", 
        {
            username: userdata.username,
            email: userdata.email,
            password: userdata.password,
            confirm_password: userdata.confirm_password

        });
        console.log("post_response Status:", post_response.data.status);
        console.log("post_response Message:", post_response.data.message);
        
        if (post_response.status === 200) {
            alert(post_response.data.message);
        } else if (post_response.data.status === 500) {
            alert(post_response.data.message);
        } else {
            alert("Unexpected post_response status: " + post_response.data.status);
        }
        
    }else{
        alert("all fields are mandatory");
    }
        
    }
    // const route = useNavigate();
    // const Login = () => {
    //     route("/Login");
    // }

    // const Home = () => {
    //     route("/");
    // }

    return (
        // <>
        // <h1>Register Here</h1>

        // <button onClick={Login}>Login</button>
        // <button onClick={Home}>Home</button>
        // </>

        <>
        <form onSubmit={handlesubmit}>
            <input onChange={handlechange} type="text" placeholder="username" name="username" /><br/>
            <input onChange={handlechange} type="email" placeholder="email" name="email" /><br/>
            <input onChange={handlechange} type="password" placeholder="password" name="password" /><br/>
            <input onChange={handlechange} type="password" placeholder="confirm_password" name="confirm_password" /><br/>
            <input type="submit" value="register" /><br/>
        </form>
        </>
    )
}



export default Register;


