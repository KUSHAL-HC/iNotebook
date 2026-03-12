import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
