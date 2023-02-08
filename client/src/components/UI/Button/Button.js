import React from "react";
import css from "./Button.module.css";

export default function Button({ children, ...rest }) {
    return (
        <button className={`btn btn-primary shadow ${css.button}`} {...rest}>
            {children}
        </button>
    );
}
