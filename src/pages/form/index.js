import React, { useEffect } from 'react'
import Layout from "../../components/Layout/Layout";

import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from './Dashboard'
import Form from './Form';
import FormDisplay from './FormDisplay'

import { useSelector } from 'react-redux'

function Index() {

    const auth = useSelector((state) => state.auth);
    const history = useHistory();
    useEffect(() => {
        if(!auth.isAuthenticated){
            history.push('/');
        }
    }, [auth]);

    return (
        <>
            <Layout>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path={'/e/:id'}>
                    <Form />
                </Route>
                <Route path={'/fill/:id'}>
                    <FormDisplay />
                </Route>
            </Layout>
        </>
    )
}

export default Index