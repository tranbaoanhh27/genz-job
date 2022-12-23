import React, { Component, useState } from "react";

import { Carousel } from "./Carousel";
import { SignInSignUpSelection } from "./SignInSignUpSelection";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";

function MainComponent({ setUser }) {
    // Detect if you are signing up or signing in, etc.
    const [component, setComponent] = useState("both");

    switch (component) {
        case "both":
            return <SignInSignUpSelection setComponent={setComponent} component={component} />;

        case "selectRole":
            return <SignInSignUpSelection setComponent={setComponent} component={component} />;

        case "signUpJobSearch":
            return <SignUp setComponent={setComponent} role="job-seeker" />;

        case "signUpRecruiter":
            return <SignUp setComponent={setComponent} role="recruiter" />;

        default:
            return <LogIn setComponent={setComponent} setUser={setUser} />;
    }
}

export function SignInAndSignUp({ setUser }) {
    document.body.style.paddingTop = "0px";
    return (
        <div className="SignInAndSignUp">
            <section className="vh-100" style={{ backgroundColor: "#545ABE" }}>
                <div className="container-fluid h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <Carousel />
                        <MainComponent setUser={setUser} />
                    </div>
                </div>
            </section>
        </div>
    );
}
