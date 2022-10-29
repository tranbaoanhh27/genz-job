import React, { Component } from "react";
import AuthAPI from '../../api/AuthApi';
import {WithRouter} from '../../common/WithRouter';

class LoginPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            message: ""
        }

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        AuthAPI.Login(this.state.userName, this.state.password)
        .then(() => {
            this.props.router.navigate('/home');
            window.location.reload();
        },
        error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
                message: resMessage
            });
          }
        );
    }

    render() {
        return (
            <form
                onSubmit={this.handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="username"
                        value={this.state.userName}
                        onChange={this.onChangeUserName}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required />
                </div>
                <div className="form-group">
                    <button 
                    className="btn btn-primary btn-block">
                        Login
                    </button>
                </div>
                {this.state.message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        {this.state.message}
                        </div>
                    </div>
                )}
            </form>
        )
    }
}

export default WithRouter(LoginPanel); 