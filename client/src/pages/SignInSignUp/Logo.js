import React, { Component, useState } from "react";
import logo from '../../assets/images/logo.svg'

export function Logo({ setComponent }) {
    return (
        <img
            className="img-fluid mx-auto block mb-5"
            onClickCapture={() => setComponent("both")}
            style={{ maxWidth: "15%", cursor: "pointer" }}
            src={logo}
        />
    );
}