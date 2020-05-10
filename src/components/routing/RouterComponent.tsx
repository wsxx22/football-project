import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import {TeamsComponent} from "../content/team/TeamsComponent";
import {StandingComponent} from "../content/StandingComponent";

export const RouterComponent = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
            <Route path="/teams" component={TeamsComponent} />
            <Route path="/standings" component={StandingComponent} />
        </Switch>
    </BrowserRouter>
)

export default RouterComponent;
