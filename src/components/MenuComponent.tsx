import React from "react";
import {Avatar, MenuList, MenuItem} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import '../css/Menu.css'
import {HomeOutlined} from "@material-ui/icons";
import {Link} from "react-router-dom";

export class MenuComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <MenuList className="menu">
                    <MenuItem component={Link} to="/">
                        <Avatar>
                            <HomeOutlined/>
                        </Avatar>
                        <span>Strona główna</span>
                    </MenuItem>
                    <MenuItem component={Link} to="/standings">
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
