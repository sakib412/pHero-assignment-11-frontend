/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import './Login.css'
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithGoogle,
        userFromGoogle,
        loadingFromGoogle,
        errorFromGoogle
    ] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password)
    }



    if (user || userFromGoogle) {
        navigate(from, { replace: true })
    }
    useEffect(() => {
        if (error || errorFromGoogle) {
            console.log(error.message)
            toast(error?.message || errorFromGoogle?.message)
        }
    }, [error, errorFromGoogle])



    return (
        <div class="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>

                <div class="form-group">
                    <input type="email" name="email" placeholder="E-mail Address"
                        className={`form-control ${!!errors?.email ? 'is-invalid' : 'is-valid'}`}
                        id="email"
                        {...register("email", {
                            required: "Please provide your email address.",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email address"
                            }
                        })} />
                    <span class="input-icon"><i class="fa fa-envelope"></i></span>
                </div>
                <div class="form-group">
                    <input type="password" name="psw" placeholder="Password"
                        className={`form-control ${!!errors?.password ? 'is-invalid' : 'is-valid'}`}
                        id="password" {...register("password", {
                            required: "Please provide your password.",
                        })} />
                    <span class="input-icon"><i class="fa fa-lock"></i></span>
                </div>
                <button class="login-btn">Login</button>
                <p className='reset-psw'>Do not have an account? <Link to="/register">Register</Link></p>

                <div class="seperator"><b>or</b></div>
                <p>Sign in with your social media account</p>
                <div class="social-icon">
                    <button onClick={() => signInWithGoogle()} type="button"><i class="fa fa-google"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Login