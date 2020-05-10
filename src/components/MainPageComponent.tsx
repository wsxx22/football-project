import React from "react";
import {Header} from "./Header";
import '../css/MainPage.css'
import {MenuComponent} from "./MenuComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TeamsComponent} from "./content/team/TeamsComponent";
import {StandingComponent} from "./content/StandingComponent";
import {HomeComponent} from "./HomeComponent";


export class MainPageComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                       <MenuComponent/>
                       <Switch>
                           <Route path='/' exact component={HomeComponent}/>
                           <Route path="/standings" component={StandingComponent}/>
                           <Route path="/teams" component={TeamsComponent}/>
                       </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
