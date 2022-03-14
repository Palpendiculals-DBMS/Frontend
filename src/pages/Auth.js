import React, { useEffect, useState } from "react";
import classes from "../components/Login/Login.module.css";

import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import MainWindow from "../components/Login/MainWindow";
import { setAuthData } from "../redux/auth/authSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

/**
 *
 * @return {React.Component}
 */
function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitPath, setSubmitPath] = useState("/form/dashboard");

  const auth = useSelector(state => state.auth);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state !== undefined && location.state.from !== undefined) {
      setSubmitPath(location.state.from);
    }
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push(submitPath);
    }
  }, [auth]);

  const emailInputHandler = function (e) {
    setEmailInput(e.target.value);
  };

  const passWordInputHandler = function (e) {
    setPasswordInput(e.target.value);
  };

  const formSubmitHandler = async e => {
    setIsSubmitting(true);
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          email: emailInput,
          password: passwordInput,
        }
      );

      console.log(res.data);
      dispatch(setAuthData(res.data));
      setIsSubmitting(false);

      toast.success("Successfully Logged In");
    } catch (err) {
      console.log(err);
      toast.error("Invalid Email or Password");
      setIsSubmitting(false);

      throw err;
    }
  };

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
            <input
              type={"email"}
              className={`${classes.input} ring-0 border border-gray-300 rounded-md hover:border-slate-400 focus:border-slate-400 bg-slate-100/70 hover:ring-0 focus:ring-0`}
              onChange={emailInputHandler}
              value={emailInput}
            ></input>
            <label className={classes.label}>PASSWORD</label>
            <input
              type="password"
              className={`${classes.input} ring-0 border border-gray-300 rounded-md hover:border-slate-400 focus:border-slate-400 bg-slate-100/70 hover:ring-0 focus:ring-0`}
              onChange={passWordInputHandler}
              value={passwordInput}
            ></input>
            {isSubmitting ? (
              <button className={`${classes.LogInButton} h-12`}>
                <div className="flex justify-center items-center animate-spin">
                  <AiOutlineLoading3Quarters />
                </div>
              </button>
            ) : (
              <button className={`${classes.LogInButton} h-12 font-body`}>
                Log In
              </button>
            )}
          </form>
          <div className={classes["log-in-bottom"]}>
            <p>
              Dont have an account
              <button
                onClick={() => {
                  console.log("clicked");
                  history.push({
                    pathname: "/signup",
                    state: { from: submitPath },
                  });
                }}
              >
                <span className={`ml-1 ${classes["Sign-up"]}`}>SignUp</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </MainWindow>
  );
}

/**
 *
 * @return {React.Component}
 */
function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [submitPath, setSubmitPath] = useState("/form/dashboard");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = useSelector(state => state.auth);

  const [SignUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = function (e, type) {
    setSignUp({
      ...SignUp,
      [type]: e.target.value,
    });
  };

  useEffect(() => {
    if (location.state !== undefined && location.state.from !== undefined) {
      setSubmitPath(location.state.from);
    }
  }, [location]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push(submitPath);
    }
  }, [auth]);

  const onSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    if (SignUp.password !== SignUp.confirmPassword) {
      alert("Password and Confirm Password does not match");
      return;
    }

    // Email Regex
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    if (!emailRegex.test(SignUp.email)) {
      alert("Invalid Email");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        {
          name: SignUp.name,
          email: SignUp.email,
          password: SignUp.password,
        }
      );

      alert("Successfully Signed Up");
      console.log(res);
      toast.success("Successfully Logged In");

      dispatch(setAuthData(res.data));
      history.push("form/dashboard");
      setIsSubmitting(false);
    } catch (err) {
      toast.error("Invalid Email or Password");
      console.log(err);
      setIsSubmitting(false);
    }
  };

  return (
    <MainWindow>
      <div className={` ${classes.LoginModal} font-body`}>
        <div className={classes["LoginModal-main"]}>
          <div className={classes["log-In-Top"]}>
            <h2>SignUp</h2>
            <p>
              Sign Up into <span className={`text-red-500 px-1`}>Yang</span>Form
            </p>
          </div>
          <form className={classes.mainForm} onSubmit={onSubmit}>
            <label className={classes.label}>NAME</label>
            <input
              className={`${classes.input} ring-0 border border-gray-300 rounded-md hover:border-slate-400 focus:border-slate-400 bg-slate-100/70 hover:ring-0 focus:ring-0`}
              onChange={e => inputChangeHandler(e, "name")}
              value={SignUp.name}
            />

            <label className={classes.label}>EMAIL</label>
            <input
              className={`${classes.input} ring-0 border border-gray-300 rounded-md hover:border-slate-400 focus:border-slate-400 bg-slate-100/70 hover:ring-0 focus:ring-0`}
              onChange={e => inputChangeHandler(e, "email")}
              value={SignUp.email}
            />

            <label className={classes.label}>PASSWORD</label>
            <input
              type="password"
              className={`${classes.input} ring-0 border border-gray-300 rounded-md hover:border-slate-400 focus:border-slate-400 bg-slate-100/70 hover:ring-0 focus:ring-0`}
              onChange={e => inputChangeHandler(e, "password")}
              value={SignUp.password}
            />

            <label className={classes.label}>CONFIRM PASSWORD</label>
            <input
              type="password"
              className={`${classes.input} ring-0 border border-gray-300 rounded-md hover:border-slate-400 focus:border-slate-400 bg-slate-100/70 hover:ring-0 focus:ring-0`}
              onChange={e => inputChangeHandler(e, "confirmPassword")}
              value={SignUp.confirmPassword}
            />
            {isSubmitting ? (
              <button className={`${classes.LogInButton} h-12`}>
                <div className="flex justify-center items-center animate-spin">
                  <AiOutlineLoading3Quarters />
                </div>
              </button>
            ) : (
              <button className={`${classes.LogInButton} h-12`}>Sign Up</button>
            )}
          </form>
          <div className={classes["log-in-bottom"]}>
            <p>
              Back To
              <button
                onClick={() => {
                  history.push({
                    pathname: "/login",
                    state: { from: submitPath },
                  });
                }}
              >
                <span className={` ${classes["Sign-up"]}  ml-1`}>Login</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </MainWindow>
  );
}

export { Login, SignUp };
