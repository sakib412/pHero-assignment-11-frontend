/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { Form, Input, message } from 'antd';


const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });
    const [signInWithGoogle, userFromGoogle, loadingFromGoogle, errorFromGoogle] = useSignInWithGoogle(auth);

    const onSubmit = ({ email, password }) => {
        createUserWithEmailAndPassword(email, password)
    }

    if (user || userFromGoogle) {
        navigate(from, { replace: true })
    }

    if (error || errorFromGoogle) {
        message.error({
            className: "pt-5",
            content: error?.message
        })
    }
    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center'>Register</h1>
                <div className="form-group">
                    <input type="email" name="email" placeholder="E-mail Address"
                        className={`form-control ${!!errors?.email ? 'is-invalid' : 'is-valid'}`}
                        {...register("email", {
                            required: "Please provide your email address.",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email address"
                            }
                        })} />
                    <span className="input-icon"><i className="fa fa-envelope"></i></span>
                    <div className="invalid-feedback">
                        {errors.email?.message}
                    </div>
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Password"
                        className={`form-control ${!!errors?.password ? 'is-invalid' : 'is-valid'}`}
                        {...register("password", {
                            required: "Please provide your password.",
                            minLength: {
                                value: 6,
                                message: "Password must be equal or greater than 6 charecters."
                            }
                        })} />
                    <div className="invalid-feedback">
                        {errors?.password?.message}
                    </div>
                    <span className="input-icon"><i className="fa fa-lock"></i></span>
                </div>
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
                <button className="login-btn">Register</button>
                <p className='reset-psw'>Already have an account? <Link to="/login">Login</Link></p>
                <div className="seperator"><b>or</b></div>
                <p className='text-center'>Sign in with your social media account</p>
                <div className="social-icon">
                    <button onClick={() => signInWithGoogle()} type="button"><i className="fa fa-google"></i></button>
                </div>
            </Form>
        </div>



    )
}

export default Register