import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo"
import { Button } from "../../components/ui/Button"
import { InputTextField } from "../../components/ui/InputTextField"

export function LogIn({ setComponent }) {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSignInSubmitButtonClicked = (event) => {
        event.preventDefault();
        console.log("Login Submit Button Clicked!");

        // Send Request to Back-end
        // const requestBody = {
        //     userName: userName,
        //     password: password,
        // };
        // axios
        //     .post(API_BASE_URL + "/authentication/login", requestBody)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             console.log(
        //                 "Received response for Log in POST request: ",
        //                 response.data
        //             );
        //         }
        //     })
        //     .catch((error) => {
        //         console.log("Log In POST request error: " + error);
        //     });

        // navigate('recruiter');
        navigate('jobseeker');
    };

    return (
        <div id="signInSignUpComponent"
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border"
            >
            <div className="d-flex flex-column flex-grow-1">
                <Logo setComponent={setComponent} />

                <h2 className="text-center fw-normal mb-4">Đăng nhập</h2>

                <form className="w-50 mx-auto">
                    <div className="mb-4">
                        <InputTextField
                            id="username"
                            placeholder="Nhập tên đăng nhập"
                            name="username"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <InputTextField
                            type="password"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            name="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="d-flex form-check mb-5">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                            />{" "}
                            Nhớ mật khẩu
                        </label>
                        <a href="#!" className="text-body ms-auto">
                            Quên mật khẩu?
                        </a>
                    </div>

                    <div className="text-center">
                        <Button type={"submit"} onClick={onSignInSubmitButtonClicked} style={{ backgroundColor: "var(--primary)" }}>Đăng nhập</Button>
                    </div>

                    <hr className="solid mt-5" />

                    <p className="small fw-bold mt-0">
                        Chưa có tài khoản?{" "}
                        <a
                            href="#!"
                            className="link-danger"
                            onClick={() => setComponent("selectRole")}>
                            Đăng ký
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}