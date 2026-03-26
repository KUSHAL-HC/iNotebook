import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation(); // ✅ fixed
    let navigate = useNavigate(); // ✅ added

    const handelLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // ✅ correct navigation
        props.showAlert("Logged out successfully", "success");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ? (
                        <form className="d-flex ms-auto">
                            <Link className='btn btn-primary mx-2' to="/login">Login</Link>
                            <Link className='btn btn-primary mx-2' to="/signup">Sign-Up</Link>
                        </form>
                    ) : (
                        <form className="d-flex ms-auto">
                            <button onClick={handelLogout} className='btn btn-primary'>Logout</button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;