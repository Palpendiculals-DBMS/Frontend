import React from 'react'
import YangLogo from '../../Assets/YangLOGO.svg';
import BottomSVG from './Group 8.svg';
import classes from './Login.module.css';

function Login() {
    return (
        <section className={ classes.mainBody }>
            <nav className={ classes.navbar }>
                <img src={ YangLogo } alt="Yang Logo" />
            </nav>
            <div className={ classes.LoginModal }>
                <div className={ classes["LoginModal-main"] }>
                    <div className={ classes["log-In-Top"] }>
                        <h2>Log In</h2>
                        <p>Enter your email and password</p>
                    </div>
                    <form className={ classes.mainForm }>
                        <label className={ classes.label }>Email</label>
                        <input className={ classes.input }></input>
                        <label className={ classes.label }>Password</label>
                        <input className={ classes.input }></input>

                        <button className={ classes.LogInButton }>Log In</button>
                    </form>
                    <div>
                        <p>Dont have an account <span className={ classes["Sign-up"] }>Sign-up</span> </p>
                    </div>
                </div>
            </div>
            <img className={ classes["bottom-svg"] } src={ BottomSVG } alt="Bottom SVG" />
        </section>
    )
}

export default Login