import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthHeader from './AuthHeader';
class _Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        CSC13002
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        
                    </div>
                    <AuthHeader />
                </nav>
            </header>
        )
    }
}

export default _Header;