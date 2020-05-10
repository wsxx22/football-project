import React from "react";
import {TeamComponent} from "./TeamComponent";
import {Team} from "../../../entity/Team";
import '../../../css/Teams.css'
import {API_KEY, GET_TEAMS_BY_LEAGUE} from "../../../constants/ApiRoute";
import {FormComponent} from "../FormComponent";

interface TeamsComponentState {
    premierLeagueTeams: Team[];
}

export class TeamsComponent extends React.Component<{}, TeamsComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            premierLeagueTeams: []
        };
        this.teams = this.teams.bind(this);
        this.getTeams = this.getTeams.bind(this);
    }

    teams = (e: any) => {
        const teamId = e.target.elements.teamName.value;
        e.preventDefault();

        fetch(GET_TEAMS_BY_LEAGUE + teamId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(response => response.json())
            .then(teams => {
                this.setState({
                    premierLeagueTeams: teams.api.teams
                });
                console.log(teams);
            });
    };

    getTeams(): JSX.Element[] {
        return this.state.premierLeagueTeams.map(team => <TeamComponent key={team.team_id} team={team}/>)
    }

    render() {
        return (
            <div className="container my-container">
                <FormComponent teams={this.getTeams}/>
                <div className="row row-teams">
                    {this.getTeams()}
                </div>
            </div>

        )
    }
}
