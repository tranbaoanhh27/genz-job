import React, { Component } from "react";
import AuthAPI from '../../api/AuthApi';
import {WithRouter} from '../../common/WithRouter';

class SignupPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            email: "",
            message: ""
        }

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
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

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSignup(e) {
        e.preventDefault();

        AuthAPI.Signup(this.state.userName, this.state.email, this.state.password)
        .then(() => {
            this.props.router.navigate('/login');
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
                onSubmit={this.handleSignup}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="username"
                        value={this.state.userName}
                        onChange={this.onChangeUserName}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
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
                        Signup
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

export default WithRouter(SignupPanel); 