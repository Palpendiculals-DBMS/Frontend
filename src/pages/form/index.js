import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";

import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Form from "./FormEdit";

import { useSelector } from "react-redux";
import FormAnalytics from "./FormAnalytics";

/**
 *
 * @return {React.Component}
 */
function Index() {
  const auth = useSelector(state => state.auth);
  useEffect(() => {}, [auth]);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/form/edit/:id" component={Form} />

          <Route path="/form/dashboard" component={Dashboard} />

          <Route path="/form/anal/:id" component={FormAnalytics} />
        </Switch>
      </Layout>
    </>
  );
}

export default Index;
