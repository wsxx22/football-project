import mainPageLogo from "../resources/img/loading-main-page2.gif";
import React from "react";
import "../css/MainPageHeader.css"

export const MainPageHeaderComponent = () => (
    <header className="App-header">
        <div>
            <img className="my-img" src={mainPageLogo} alt="main page"/>
            <span className="App-title">Football Teams</span>
        </div>
    </header>
);
