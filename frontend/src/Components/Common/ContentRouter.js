import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Alert from "../Common/Alert"
import Login from "../Login"
import MainMenu from '../MainMenu'
import NoFound from "../Common/NoFound"



const ContentRouter = () => {

    return (
        <div className="h100" id="main-container">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/main-menu">
                    <MainMenu />
                </Route>
                <Route>
                    <Alert/>
                </Route>
                <Route path="*">
                    <NoFound />
                </Route>
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </div>
    );
};

export default ContentRouter;