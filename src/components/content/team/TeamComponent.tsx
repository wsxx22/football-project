import React from "react";
import {Team} from "../../../entity/Team";
import '../../../css/Team.css'
import {Button} from "@material-ui/core";

interface TeamComponentProps {
    team: Team;
}

export const TeamComponent = (props: TeamComponentProps) => {
    return (
        <div className="col-md-4">
            <div className="teams__box box">
                <span className="team-Title">Klub: {props.team.name}</span>
                <span className="team-content">Państwo: {props.team.country}</span>
                <img src={props.team.logo} alt={props.team.name}/>
                <div className="detail-button">
                    <Button variant="outlined" size="small" color="default">Zobacz szczegóły</Button>
                </div>
            </div>
        </div>
    )
}
