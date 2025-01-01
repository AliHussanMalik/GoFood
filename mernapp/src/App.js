import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import "./App.css";
import Home from "./screens/Home";
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
import Signup from "./screens/Signup";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/createuser" element = {<Signup/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
