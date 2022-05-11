/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import './Login.css'
import auth from '../../firebase.init';
import { Button, Form, Input } from 'antd';

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
        <div class="w-75 mx-auto my-5">
            <Form onFinish={onSubmit} layout="vertical">
                <h1 className='text-center'>Login</h1>

                <Form.Item name="email" label="Email"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: "Please input your email"
                    },
                    {
                        type: 'email'
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit' size='large' type='primary'>Login</Button>
                </Form.Item>
                <p className='reset-psw'>Do not have an account? <Link to="/register">Register</Link></p>

                <div class="seperator"><b>or</b></div>
                <p className='text-center'>Sign in with your social media account</p>
                <div class="social-icon">
                    <button onClick={() => signInWithGoogle()} type="button"><i class="fa fa-google"></i></button>
                </div>
            </Form>
        </div>
    )
}

export default Login