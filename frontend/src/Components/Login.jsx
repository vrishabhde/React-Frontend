import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const route = useNavigate();

    const Register = () =>{
        route('/Register');
    }
    const Home = () => {
        route("/");
    }


    return(
        <>
        <h1>Login Here</h1>

        <button onClick={Register}>Register</button>
        <button onClick={Home}>Home</button>
        </>
    )
}

export default Login;