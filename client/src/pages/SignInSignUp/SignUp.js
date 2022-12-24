import React, { Component, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "../../components/UI/Button";
import { InputTextField } from "../../components/UI/InputTextField";
import AuthAPI from "../../api/AuthApi"
import RoleApi from "../../api/RoleApi"
import { useNavigate } from "react-router-dom";

export function SignUp({ setComponent, role, setUser }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerification, setPasswordVerification] = useState("");
    const [validPasswordVerification, setValidPasswordVerification] = useState(true);

    const navigate = useNavigate();

    const signUpHandler = (event) => {
        event.preventDefault();
        AuthAPI.Signup(username, email, password).then((response) => {
            if (response.status === 200) {
                console.log("Signed Up Successfully!");
                RoleApi.assign(response.data.data.id, role)
                .then(response => {
                    if (response.status === 200)
                        alert("Đăng kí thành công!");
                })
                .catch(error => {
                    let msg = error.message;
                    if (error.response)
                        msg = error.response.data.message;
                    alert("Đăng kí không thành công!\n"+ msg);
                    console.log(error);
                });
            }
            else {
                console.log("Failed to Sign Up!");
            }
        })
        .catch(error => {
            let msg = error.message;
            if (error.response)
                msg = error.response.data.message;
            alert("Đăng kí không thành công!\n"+ msg);
            console.log(error);
        });
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const passwordVerificationChangeHandler = (event) => {
        setPasswordVerification(event.target.value);

        // Check if password verification matches with password
        setValidPasswordVerification(password === event.target.value);
    };

    return (
        <div id="signInSignUpComponent" className="col-lg-7 d-flex align-items-center h-100 shadow-lg border">
            <div className="d-flex flex-column flex-grow-1">
                <Logo setComponent={setComponent} />

                <h2 className="text-center fw-normal mb-3">Đăng ký</h2>
                <h3 className="text-center text-muted mb-4">Săn đầu người</h3>

                <form className="w-50 mx-auto" onSubmit={signUpHandler}>
                    <div className="mb-4">
                        <InputTextField
                            id="username"
                            placeholder="Tên tài khoản"
                            name="userName"
                            value={username}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <InputTextField
                            type="email"
                            id="email"
                            placeholder="Địa chỉ email"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                        />
                    </div>

                    {/* <div className="mb-4">
                        <InputTextField
                            id="company"
                            placeholder="Tên doanh nghiệp"
                            name="company"
                        />
                    </div> */}

                    <div className="row">
                        <div className="col mb-4">
                            <InputTextField
                                type="password"
                                id="password"
                                placeholder="Mật khẩu"
                                name="password"
                                value={password}
                                onChange={passwordChangeHandler}
                            />
                        </div>
                        <div className="col mb-4">
                            <InputTextField
                                type="password"
                                id="verify"
                                placeholder="Xác nhận mật khẩu"
                                name="verify"
                                value={passwordVerification}
                                onChange={passwordVerificationChangeHandler}
                                style={{ border: validPasswordVerification ? "1px solid green" : "3px solid red" }}
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <Button type="submit" style={{ backgroundColor: "var{--primary}" }}>
                            Đăng ký
                        </Button>
                    </div>

                    <hr className="solid mt-5" />

                    <p className="small fw-bold mt-0">
                        Đã có tài khoản?{" "}
                        <a className="link-danger" onClick={() => setComponent("logIn")}>
                            Đăng nhập
                        </a>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
}
