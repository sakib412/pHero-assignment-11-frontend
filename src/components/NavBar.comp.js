import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import auth from '../firebase.init'

const NavBar = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Fruit King</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-nav ms-auto">
                        {!user ? (
                            <>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </>
                        ) : (
                            <>
                                <p className="nav-link">Najmus Sakib</p>
                                <button className="btn btn-link nav-link">Logout</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar