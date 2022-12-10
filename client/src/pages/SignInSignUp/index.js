import React, { Component, useState } from "react";

import { Carousel } from "./Carousel";
import { SignInSignUpSelection } from "./SignInSignUpSelection";
import { LogIn } from "./LogIn";
import { SignUpJobSearch } from "./SignUpJobSearch";
import { SignUpRecruiter } from "./SignUpRecruiter";

function MainComponent() {

    // Detect if you are signing up or signing in, etc.
    const [component, setComponent] = useState("both");

    switch (component) {
        case "both":
            return (
                <SignInSignUpSelection
                    setComponent={setComponent}
                    component={component}
                />
            );

        case "selectRole":
            return (
                <SignInSignUpSelection
                    setComponent={setComponent}
                    component={component}
                />
            );

        case "signUpJobSearch":
            return <SignUpJobSearch setComponent={setComponent} />;

        case "signUpRecruiter":
            return <SignUpRecruiter setComponent={setComponent} />;

        default:
            return <LogIn setComponent={setComponent} />;
    }
}

export function SignInAndSignUp() {

    return (
        <div className="SignInAndSignUp">
            <section className="vh-100" style={{ backgroundColor: "#545ABE" }}>
                <div className="container-fluid h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <Carousel />
                        <MainComponent />
                    </div>
                </div>
            </section>
        </div>
    );
}