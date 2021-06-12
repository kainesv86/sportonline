import * as React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
        return (
                <div className="bg-white">
                        <AppBar position="static" color="inherit">
                                <Toolbar>
                                        <div className="flex items-center justify-between w-full">
                                                <Link to="/">
                                                        <IconButton edge="start" color="inherit" aria-label="menu">
                                                                <img src="/share/logo.png" alt="" className="w-40" />
                                                        </IconButton>
                                                </Link>
                                                <ul className="flex transform -translate-x-6">
                                                        <li className="mr-10">
                                                                <Link to="/trainer">
                                                                        <Button color="primary">Trainer</Button>
                                                                </Link>
                                                        </li>
                                                        <li className="mr-10">
                                                                <Link to="/course">
                                                                        <Button color="primary">Course</Button>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="/community">
                                                                        <Button color="primary">Community</Button>
                                                                </Link>
                                                        </li>
                                                </ul>
                                                <Link to="/login">
                                                        <Button variant="outlined" color="secondary" size="large">
                                                                Join Now!
                                                        </Button>
                                                </Link>
                                        </div>
                                </Toolbar>
                        </AppBar>
                </div>
        );
};

export default NavBar;
