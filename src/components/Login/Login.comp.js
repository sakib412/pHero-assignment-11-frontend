/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import './Login.css'
import auth from '../../firebase.init';
import { Button, Form, Input, message } from 'antd';
import assignJWT from '../../utils/assignJWT';

const Login = () => {
    const [authUser] = useAuthState(auth)
    const navigate = useNavigate()
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

    useEffect(() => {
        if (user || userFromGoogle) {
            assignJWT(user?.email || userFromGoogle?.email)
            navigate(from, { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, userFromGoogle])

    useEffect(() => {
        if (error || errorFromGoogle) {
            message.error({
                className: "pt-5",
                content: error?.message || errorFromGoogle?.message
            })
        }
    }, [error, errorFromGoogle])

    useEffect(() => {
        if (authUser) {
            navigate(from, { replace: true })
        }
    }, [authUser, from, navigate])

    return (
        <div className="w-75 mx-auto my-5">
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

                <div className="seperator"><b>or</b></div>
                <p className='text-center'>Sign in with your social media account</p>
                <div className="social-icon">
                    <button onClick={() => signInWithGoogle()} type="button"><i className="fa fa-google"></i></button>
                </div>
            </Form>
        </div>
    )
}

export default Login