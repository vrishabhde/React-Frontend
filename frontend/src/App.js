import {Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Counter from "./Components/Counter";



function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Counter" element={<Counter />}/>
    </Routes>
   </>
  );
}

export default App;
