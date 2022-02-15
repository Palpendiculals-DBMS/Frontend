import React, { useState } from 'react'
import YangLogo from '../../Assets/YangLOGO.svg';
import BottomSVG from './Group 8.svg';
import classes from './Login.module.css';

import {Link} from 'react-router-dom';
import axios from 'axios'

function MainWindow(props) {
    return (
        <div className={ classes.mainWindow }>
            <section className={ classes.mainBody }>
                <nav className={ classes.navbar }>
                    <img src={ YangLogo } alt="Yang Logo" />
                </nav>
                {props.children}
                <img className={ classes["bottom-svg"] } src={ BottomSVG } alt="Bottom SVG" />
            </section>
        </div>
    )
}

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const emailInputHandler = function (e) {
        setEmailInput(e.target.value);
    }

    const passWordInputHandler = function (e) {
        setPasswordInput(e.target.value);
    }

    const inputCredential = {
        email: emailInput,
        password: passwordInput
    };

    const formSubmitHandler = function (e) {
        e.preventDefault();
        console.log(inputCredential);
    }

    return (
        <MainWindow>
            <div className={ classes.LoginModal }>
                <div className={ classes["LoginModal-main"] }>
                    <div className={ classes["log-In-Top"] }>
                        <h2>Log In</h2>
                        <p>Enter your email and password</p>
                    </div>
                    <form className={ classes.mainForm } onSubmit={ formSubmitHandler }>
                        <label className={ classes.label }>EMAIL</label>
                        <input className={ classes.input } onChange={ emailInputHandler } value={ emailInput }></input>
                        <label className={ classes.label }>PASSWORD</label>
                        <input className={ classes.input } onChange={ passWordInputHandler } value={ passwordInput }></input>
                        <button className={ classes.LogInButton }>Log In</button>
                    </form>
                    <div className={ classes["log-in-bottom"] }>
                        <p>Dont have an account
                            <Link to={ "/signup" }>
                            <span className={ `ml-1 ${classes["Sign-up"]}` }>SignUp</span>
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </MainWindow>
    )
}


function SignUp() {

    const [SignUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const inputChangeHandler = function (e,type) {
        setSignUp({
            ...SignUp,
            [type]: e.target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if(SignUp.password !== SignUp.confirmPassword){
            alert('Password and Confirm Password does not match');
            return;
        }

        // Email Regex
        const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

        if(!emailRegex.test(SignUp.email)){
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

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <MainWindow>
            <div className={ classes.LoginModal }>
                <div className={ classes["LoginModal-main"] }>
                    <div className={ classes["log-In-Top"] }>
                        <h2>SignUp</h2>
                        <p>Sign Up into <span className={`text-red-500 px-1`}>Yang</span>Form</p>
                    </div>
                    <form className={ classes.mainForm } onSubmit={onSubmit}>

                        <label className={ classes.label }>NAME</label>
                        <input className={ classes.input } onChange={(e) => inputChangeHandler(e,'name')} value={ SignUp.name } />

                        <label className={ classes.label }>EMAIL</label>
                        <input className={ classes.input } onChange={(e) => inputChangeHandler(e,'email')} value={ SignUp.email } />

                        <label className={ classes.label }>PASSWORD</label>
                        <input className={ classes.input } onChange={(e) => inputChangeHandler(e,'password')} value={SignUp.password} />
                        
                        <label className={ classes.label }>CONFIRM PASSWORD</label>
                        <input className={ classes.input } onChange={(e) => inputChangeHandler(e,'confirmPassword')} value={SignUp.confirmPassword} />
                        <button className={ classes.LogInButton }>Log In</button>
                    </form>
                    <div className={ classes["log-in-bottom"] }>
                        <p>Dont have an account
                            <Link to={ "/login" }>
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
