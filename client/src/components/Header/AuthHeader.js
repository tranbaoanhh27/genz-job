import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthAPI from '../../api/AuthApi';

class AuthHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        const user = AuthAPI.GetCurrentUser();
        this.setState({
            user: user
        })
    }
    logOut(e) {
        AuthAPI.Logout();
    }

    render() {
        const {user} = this.state;
        return (
            <>
           {user ? (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                    Log Out
                    </a>
                </li>
            </div>
           ) : (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/signup"} className="nav-link">
                        Signup
                    </Link>
                </li>
            </div>
           )}
            </>
            
        )
    }
}

export default AuthHeader;