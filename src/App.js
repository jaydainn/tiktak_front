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
import History from './pages/History.js'
import Create from './pages/Create.js'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact={true} path="/" element={sessionStorage.getItem("token") != undefined? <Home /> : <Landing />} />
          <Route exact={true} path="/plan" element={<Planning />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/history" element={<History />} />
          <Route exact={true} path="/create" element={<Create />} />
        </Routes>
      </Router>


    </> 

  )
}

export default App;
