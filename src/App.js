import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth";

import Dashboard from "./pages/Dashboard";
import FormDisplay from "./pages/FormDisplay";
import FormEdit from "./pages/FormEdit";
import FormResponses from "./pages/FormResponses";


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Auth isSignUp={ false } />
          </Route>
          <Route path="/signup">
            <Auth isSignUp={ true } />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/responses">
            <FormResponses />
          </Route>
          <Route path="/form">
            <FormDisplay />
          </Route>
          <Route path="/edit">
            <FormEdit />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
