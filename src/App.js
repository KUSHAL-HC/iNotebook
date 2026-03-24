import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import NotesState from './context/notes/NotesState.js';
import Alert from './components/Alert.js';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NotesState>
    <BrowserRouter>
      <Navbar/>
      <Alert/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </div>

      </BrowserRouter>
    </NotesState>
    </>
  );
}
export default App;
