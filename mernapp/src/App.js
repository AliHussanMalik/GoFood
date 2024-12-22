import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Login from "./screens/Login";
import "./App.css";
import Home from "./screens/Home";
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
import Signup from "./screens/Signup";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dar.kmin.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/login" element = {<Login/>}/>
        {/* <Route exact path="/navbar" element = {<Navbar/>}/> */}
        {/* <Route exact path="/footer" element = {<Footer/>}/> */}
        <Route exact path="/createuser" element = {<Signup/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
