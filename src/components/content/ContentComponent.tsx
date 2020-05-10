import React from "react";
import {API_KEY, GET_TEAMS_BY_LEAGUE} from "../../constants/ApiRoute";
import {FormComponent} from "./FormComponent";
import {TeamsComponent} from "./team/TeamsComponent";
import '../../css/Content.css'

// interface MainPageState {
//     premierLeagueTeams: [];
// }

export class ContentComponent extends React.Component<{}, {}>{

    // constructor(props: {}) {
    //     super(props);
    //     this.state = {
    //         premierLeagueTeams: []
    //     };
        // this.getTeams = this.getTeams.bind(this);
    // }

    // getTeams = (e: any) => {
    //     const teamId = e.target.elements.teamName.value;
    //     e.preventDefault();
    //
    //     fetch(GET_TEAMS_BY_LEAGUE + teamId, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //             "x-rapidapi-key": API_KEY
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(teams => {
    //             this.setState({
    //                 premierLeagueTeams: teams.api.teams
    //             });
    //             console.log(teams);
    //         });
    // };

    render() {
        return (
            <div className="wrapper">


            </div>
        )
    }
}
