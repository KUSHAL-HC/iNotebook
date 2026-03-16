import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import NotesState from './context/notes/NotesState.js';

function App() {
  return (
    <>
    <NotesState>
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
        </Routes>
      </div>

      </BrowserRouter>
    </NotesState>
    </>
  );
}
export default App;
