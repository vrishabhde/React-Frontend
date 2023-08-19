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
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/counter" element={<Counter />}/>
    </Routes>
   </>
  );
}

export default App;
