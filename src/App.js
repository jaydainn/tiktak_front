import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './pages/Login.js';
import Planning from './pages/Planning.js';
import Home from './pages/Home.js'
import Navbar from './components/Navbar';
import Landing from './pages/Landing.js'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact={true} path="/" element={sessionStorage.getItem("token") != undefined? <Home /> : <Landing />} />
          <Route exact={true} path="/planner" element={<Planning />} />
          <Route exact={true} path="/login" element={<Login />} />
        </Routes>
      </Router>


    </> 

  )
}

export default App;
