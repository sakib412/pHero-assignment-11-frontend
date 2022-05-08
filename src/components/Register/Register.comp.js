import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div class="login-form">
            <form>
                <h1>Login</h1>

                <div class="form-group">
                    <input type="text" name="name" placeholder="Full Name" />
                    <span class="input-icon"><i class="fa fa-user"></i></span>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="E-mail Address" />
                    <span class="input-icon"><i class="fa fa-envelope"></i></span>
                </div>
                <div class="form-group">
                    <input type="password" name="psw" placeholder="Password" />
                    <span class="input-icon"><i class="fa fa-lock"></i></span>
                </div>
                <button class="login-btn">Register</button>
                <div class="seperator"><b>or</b></div>
                <p>Sign in with your social media account</p>
                <div class="social-icon">
                    <button type="button"><i class="fa fa-google"></i></button>
                </div>
            </form>
        </div>



    )
}

export default Login