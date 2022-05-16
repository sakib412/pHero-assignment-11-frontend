import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init'
import { message } from 'antd';
import { ACCESS_TOKEN } from '../../utils/axios';

const NavBar = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const onLogout = () => {
        signOut(auth)
        localStorage.removeItem(ACCESS_TOKEN)
        message.success({
            className: 'pt-5',
            content: "Logged out successfully"
        })
        navigate('/login')
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Fruit King</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/inventory">Manage inventories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        {user && (
                            <>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/add-item">Add Item</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/my-items">My Items</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                    <div className="navbar-nav ms-auto">
                        {user ? (
                            <>
                                <button className="btn btn-link nav-link">{user?.photoURL ?
                                    <img className='img-fluid'
                                        style={{ height: '20px', width: '20px' }} src={user?.photoURL} alt={user?.email} /> :
                                    <i className="fa fa-user nav-link"></i>}</button>

                                <button onClick={onLogout} className="btn btn-link nav-link">Logout</button>
                            </>

                        ) : (
                            <>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </>

                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar