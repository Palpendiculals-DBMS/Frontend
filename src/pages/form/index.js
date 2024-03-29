import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";

import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Form from "./FormEdit";

import { useSelector } from "react-redux";
import FormAnalytics from "./FormAnalytics";
import FormAPI from "./FormApi";

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
          <Route path="/form/analytics/:id" component={FormAnalytics} />
          <Route path="/form/api" component={FormAPI} />
        </Switch>
      </Layout>
    </>
  );
}

export default Index;
