import React from "react";
import {MainPageHeaderComponent} from "./MainPageHeaderComponent";
import '../css/MainPage.css'
import {MenuComponent} from "./menu/MenuComponent";
import {ContentComponent} from "./content/ContentComponent";


export class MainPageComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <MainPageHeaderComponent/>
                <div className="wrapper">
                    <MenuComponent/>
                    <ContentComponent/>
                </div>
            </div>
        )
    }
}
