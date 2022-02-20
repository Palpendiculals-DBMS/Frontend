import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch, useHistory } from "react-router-dom";

import route from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { getAuthData } from "./redux/auth/authSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Form from './pages/form/index';

function App() {

  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthData());
  }, []);

  useEffect(() => {
    console.log(auth);
  }, [auth])

  return (
    <BrowserRouter>
      <Switch>


        {route.map((item, index) => {
          return (
            <Route
              path={item.path}
              component={item.isAuth && !auth.isAuthenticated ? null : item.component}
            />
          )
        })}


        <Route to={`/`}>
          <Redirect to={'/login'} />
        </Route>

      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
