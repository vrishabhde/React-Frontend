import { useNavigate } from "react-router-dom";

const Home = () =>{
    const route = useNavigate();
    const Login = () => {
        route("/Login");
    }

    const Register = ( )=>{
        route("/Register")
    }

    const Counter = () => {
        route("/Counter");
    }
    return (
        <>
            <h1>Home page</h1>
            <button onClick={Login}>Login</button><br/><br/>
            <button onClick={Register}>Register</button><br/><br/>
            <button onClick={Counter}>Counter</button><br/><br/>

        </>
    )
};

export default Home;