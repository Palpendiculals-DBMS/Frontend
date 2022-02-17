import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch, useHistory } from "react-router-dom";

import route from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { getAuthData } from "./redux/auth/authSlice";

// import Form from './pages/form/index';

function App() {

  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAuthData());
  }, []);

  useEffect(() => {
    console.log(auth);
  }, [auth])

  return (
    <BrowserRouter>
      <Switch>


        { route.map((item, index) => {
          return (
            <Route path={ item.path }>
              {
                item.isAuth === true && auth.isAuthenticated !== true ?
                  null : <item.component />
              }
            </Route>
          )
        }) }


        <Route to={ `/` }>
          <Redirect to={ '/login' } />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
