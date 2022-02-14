import React, { useRef, useState } from 'react'
import YangLogo from '../../Assets/YangLOGO.svg';
import BottomSVG from './Group 8.svg';
import classes from './Login.module.css';

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
    }

    return (
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
                    <p>Dont have an account <span className={ classes["Sign-up"] }>Sign-up</span> </p>
                </div>
            </div>
        </div>
    )
}

function MainWindow() {
    return (
        <div className={ classes.mainWindow }>
            <section className={ classes.mainBody }>
                <nav className={ classes.navbar }>
                    <img src={ YangLogo } alt="Yang Logo" />
                </nav>
                <Login />

                <img className={ classes["bottom-svg"] } src={ BottomSVG } alt="Bottom SVG" />
            </section>
        </div>
    )
}

export default MainWindow;