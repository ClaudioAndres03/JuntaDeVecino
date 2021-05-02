import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Alert from "../Common/Alert";
import Login from "../Login";
import MainMenu from '../MainMenu';
import NoFound from "../Common/NoFound";
import PaySecurity from '../PaySecurity';
import PayRFID from '../PayRFID';
import Reports from '../Reports';


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
                <Route exact path="/pay-security">
                    <PaySecurity />
                </Route>
                <Route exact path="/pay-rfid">
                    <PayRFID />
                </Route>
                <Route exact path="/reports">
                    <Reports />
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