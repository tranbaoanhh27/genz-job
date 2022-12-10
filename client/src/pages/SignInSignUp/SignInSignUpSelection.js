import React, { Component, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "../../components/UI/Button"

export function SignInSignUpSelection({ component, setComponent }) {

    const handleClickButton1 = () => {
        if (component === "selectRole") {
            setComponent("signUpJobSearch");
        } else {
            setComponent("selectRole");
        }
    };

    const handleClickButton2 = () => {
        if (component === "selectRole") {
            setComponent("signUpRecruiter");
        } else {
            setComponent("signUp");
        }
    };

    return (
        <div id="signInSignUpComponent"
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border" >
            <div className="d-flex flex-column flex-grow-1">
                <Logo setComponent={setComponent} />

                <h2 className="text-center fw-normal mb-5">Bạn muốn?</h2>

                <div className="d-grid gap-5 col-6 mx-auto">

                    <Button type={"button"} onClick={handleClickButton1} style={{ backgroundColor: "var{--primary}" }}>
                        {component === "selectRole" ? "Đăng ký tìm việc" : "Đăng ký"}
                    </Button>
                    <Button type={"button"} onClick={handleClickButton2} style={{ backgroundColor: "var{--primary}" }}>
                        {component === "selectRole" ? "Đăng ký tìm người" : "Đăng nhập"}
                    </Button>
                </div>
            </div>
        </div>
    );
}