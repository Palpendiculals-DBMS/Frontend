import React, { useEffect, useState } from 'react';
import classes from '../components/Login/Login.module.css';

import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import MainWindow from '../components/Login/MainWindow';
import { setAuthData } from '../redux/auth/authSlice';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const auth = useSelector((state) => state.auth);
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.isAuthenticated) {
            history.push('form/dashboard');
        }
    }, [auth]);

    const emailInputHandler = function (e) {
        setEmailInput(e.target.value);
    }

    const passWordInputHandler = function (e) {
        setPasswordInput(e.target.value);
    }

    const formSubmitHandler = async (e) => {
        setIsSubmitting(true);
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
                email: emailInput,
                password: passwordInput
            });

            console.log(res.data);
            dispatch(setAuthData(res.data));

            toast.success("Successfully Logged In");
        } catch (err) {
            console.log(err);
            toast.error("Invalid Email or Password");
            throw err;
        }

        setIsSubmitting(false);
    }

    return (
        <MainWindow>
            <div className={`${classes.LoginModal} font-body`}>
                <div className={classes["LoginModal-main"]}>
                    <div className={classes["log-In-Top"]}>
                        <h2>Log In</h2>
                        <p>Enter your email and password</p>
                    </div>
                    <form className={classes.mainForm} onSubmit={formSubmitHandler}>
                        <label className={classes.label}>EMAIL</label>
                        <input type={'email'} className={classes.input} onChange={emailInputHandler} value={emailInput}></input>
                        <label className={classes.label}>PASSWORD</label>
                        <input type="password" className={classes.input} onChange={passWordInputHandler} value={passwordInput}></input>
                        {
                            isSubmitting ?
                                <button className={`${classes.LogInButton} h-12`}>
                                    <div class="flex justify-center items-center animate-spin">
                                        <AiOutlineLoading3Quarters />
                                    </div>
                                </button>
                                :
                                <button className={`${classes.LogInButton} h-12 font-body`}>Log In</button>
                        }

                    </form>
                    <div className={classes["log-in-bottom"]}>
                        <p>Dont have an account
                            <Link to={"/signup"}>
                                <span className={`ml-1 ${classes["Sign-up"]}`}>SignUp</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </MainWindow>
    )
}


function SignUp() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const auth = useSelector((state) => state.auth);

    const [SignUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const inputChangeHandler = function (e, type) {
        setSignUp({
            ...SignUp,
            [type]: e.target.value
        });
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            history.push('/form/dashboard');
        }
    }, [auth]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (SignUp.password !== SignUp.confirmPassword) {
            alert('Password and Confirm Password does not match');
            return;
        }

        // Email Regex
        const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

        if (!emailRegex.test(SignUp.email)) {
            alert('Invalid Email');
            return;
        }

        try {

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
                name: SignUp.name,
                email: SignUp.email,
                password: SignUp.password
            });

            alert("Successfully Signed Up");
            console.log(res);
            toast.success("Successfully Logged In");

            dispatch(setAuthData(res.data));
            history.push('form/dashboard');

        } catch (err) {
            toast.error("Invalid Email or Password");
            console.log(err);
        }

        setIsSubmitting(false);

    }



    return (
        <MainWindow>
            <div className={` ${classes.LoginModal} font-body`}>
                <div className={classes["LoginModal-main"]}>
                    <div className={classes["log-In-Top"]}>
                        <h2>SignUp</h2>
                        <p>Sign Up into <span className={`text-red-500 px-1`}>Yang</span>Form</p>
                    </div>
                    <form className={classes.mainForm} onSubmit={onSubmit}>

                        <label className={classes.label}>NAME</label>
                        <input className={classes.input} onChange={(e) => inputChangeHandler(e, 'name')} value={SignUp.name} />

                        <label className={classes.label}>EMAIL</label>
                        <input className={classes.input} onChange={(e) => inputChangeHandler(e, 'email')} value={SignUp.email} />

                        <label className={classes.label}>PASSWORD</label>
                        <input type="password" className={classes.input} onChange={(e) => inputChangeHandler(e, 'password')} value={SignUp.password} />

                        <label className={classes.label}>CONFIRM PASSWORD</label>
                        <input type="password" className={classes.input} onChange={(e) => inputChangeHandler(e, 'confirmPassword')} value={SignUp.confirmPassword} />
                        {
                            isSubmitting ?
                                <button className={`${classes.LogInButton} h-12`}>
                                    <div class="flex justify-center items-center animate-spin">
                                        <AiOutlineLoading3Quarters />
                                    </div>
                                </button>
                                :
                                <button className={`${classes.LogInButton} h-12`}>Sign Up</button>
                        }
                    </form>
                    <div className={classes["log-in-bottom"]}>
                        <p>Back To
                            <Link to={"/login"}>
                                <span className={` ${classes["Sign-up"]}  ml-1`}>Login</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </MainWindow>
    )
}

export { Login, SignUp };
