/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { Button, Form, Input, message, Spin } from 'antd';
import assignJWT from '../../utils/assignJWT';


const Register = () => {
    const [authUser] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const [registerLoading, setRegisterLoading] = useState(false)
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true // after registering, send user confirmation email
    });
    const [signInWithGoogle, userFromGoogle, loadingFromGoogle, errorFromGoogle] = useSignInWithGoogle(auth);

    const onSubmit = ({ email, password }) => {
        setRegisterLoading(true)
        createUserWithEmailAndPassword(email, password)
    }

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 4,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 4,
            },
        },
    };

    useEffect(() => {
        if (user || userFromGoogle) {
            setRegisterLoading(false)
            assignJWT(user?.email || userFromGoogle?.email)
            navigate(from, { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, userFromGoogle])

    useEffect(() => {
        if (error || errorFromGoogle) {
            setRegisterLoading(false)
            message.error({
                className: "pt-5",
                content: error?.message
            })
        }
    }, [error, errorFromGoogle])

    useEffect(() => {
        if (authUser) {
            navigate(from, { replace: true })
        }
    }, [authUser, from, navigate])

    return (
        <div className="mx-auto">
            <Spin spinning={registerLoading || loadingFromGoogle} tip="Please wait, Registering user...">
                <Form
                    size='large'
                    onFinish={onSubmit}
                    {...formItemLayout}
                    scrollToFirstError>
                    <h1 className='text-center'>Register</h1>

                    <Form.Item name="email" label="Email" hasFeedback
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}>
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
                            {
                                min: 6
                            }
                        ]}>
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" disabled={loading}>
                            Register
                        </Button>
                    </Form.Item>
                    <p className='reset-psw'>Already have an account? <Link to="/login">Login</Link></p>
                    <div className="seperator"><b>or</b></div>
                    <p className='text-center'>Sign in with your social media account</p>
                    <div className="social-icon">
                        <button onClick={() => signInWithGoogle()} type="button"><i className="fa fa-google"></i></button>
                    </div>
                </Form>
            </Spin>
        </div>
    )
}

export default Register