import React from "react";
import {Avatar, MenuList, MenuItem} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import '../../css/Menu.css'
import {HomeOutlined} from "@material-ui/icons";
import {TeamsComponent} from "../content/team/TeamsComponent";
import {Link} from "react-router-dom";

export class MenuComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div className="wrapper">
                <MenuList className="menu">
                    <MenuItem>
                        <Avatar>
                            <HomeOutlined/>
                        </Avatar>
                        <span>Strona główna</span>
                    </MenuItem>
                    <MenuItem>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                        <span>Tabele</span>
                    </MenuItem>
                    <MenuItem component={Link} to="/teams">
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                        <span>Drużyny</span>
                    </MenuItem>
                </MenuList>
            </div>
        )
    }
}
