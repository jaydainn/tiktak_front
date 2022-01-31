import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './pages/Login.js';
import Planning from './pages/Planning';

function App() {
  return (
    <Planning />
  )
}

export default App;
