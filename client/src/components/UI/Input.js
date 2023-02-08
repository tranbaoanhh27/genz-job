import React from "react";

const Input = ({ className, ...rest }) => {
    return <input className={`form-control ${className}`} {...rest} />;
};

export default Input;
