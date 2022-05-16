import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-6 align-self-center">
                <img src='/images/space.svg' alt='icon' className='img-fluid' />
            </div>
            <div className="col-md-6 align-self-center">
                <h1 style={{ fontSize: "6em" }}>404</h1>
                <h2>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist.
                    How you got here is a mystery. But you can click the button below
                    to go back to the homepage.
                </p>
                <Link className="btn btn-primary" to="/">HOME</Link>
            </div>
        </div>
    )
}

export default NotFound