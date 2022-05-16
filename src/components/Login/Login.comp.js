/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Button, Form, Input } from 'antd';

import './Login.css'
import auth from '../../firebase.init';
import assignJWT from '../../utils/assignJWT';
import { errorMessage, successMessage } from '../../utils/message';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState("") //for reset password
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
    const [sendPasswordResetEmail, sending, errorFromReset] = useSendPasswordResetEmail(auth);

    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user || userFromGoogle) {
            assignJWT(user?.user?.email || userFromGoogle?.user?.email)
            successMessage("Logged in successfully")
            navigate(from, { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, userFromGoogle])

    useEffect(() => {
        if (error || errorFromGoogle) {
            errorMessage(error?.message || errorFromGoogle?.message || errorFromReset?.message)
        }
    }, [error, errorFromGoogle, errorFromReset])

    const onResetPassword = () => {
        if (!email) {
            errorMessage("Please input your mail first")
        } else {
            sendPasswordResetEmail(email)
        }
    }

    const onFormValueChange = (changedValues) => {
        setEmail(changedValues?.email?.trim())
    }

    return (
        <div className="w-75 mx-auto my-5">
            <Form onFinish={onSubmit} layout="vertical"
                onValuesChange={onFormValueChange}
            >
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
                <p>Forgot your password? <span onClick={onResetPassword} className='btn btn-link'>
                    {sending ? 'Sending...' : 'Reset here'}
                </span></p>
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