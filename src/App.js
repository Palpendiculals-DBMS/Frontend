import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import route from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { getAuthData } from "./redux/auth/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forbidden = () => {
  return (
    <>
      <Redirect to={`/login`} />
    </>
  );
};

/**
 *
 * @return {React.Component}
 */
function App() {
  const auth = useSelector(state => state.auth);
  const [Load, setLoad] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthData());
    setLoad(true);
  }, []);

  useEffect(() => {
    console.log(Load, auth);
  }, [Load]);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  if (!Load) {
    return <></>;
  }

  return (
    <BrowserRouter>
      <Switch>
        {route.map((item, index) => {
          if (item.isAuth && !auth.isAuthenticated) {
            return (
              <Route path={item.path} key={index}>
                <Forbidden />
              </Route>
            );
          }
          return (
            <Route path={item.path} component={item.component} key={index} />
          );
        })}

        <Route to={`/`}>
          <Redirect to={"/login"} />
        </Route>
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
