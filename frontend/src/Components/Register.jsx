import { useNavigate } from "react-router-dom";

const Register = () => {
    const route = useNavigate();
    const Login = () => {
        route("/Login");
    }

    const Home = () => {
        route("/");
    }

    return (
        <>
        <h1>Register Here</h1>

        <button onClick={Login}>Login</button>
        <button onClick={Home}>Home</button>
        </>
    )
}



export default Register;


