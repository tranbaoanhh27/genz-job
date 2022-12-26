import React, { useState } from "react";

export function InputTextField({ ...rest }) {
    return <input className="form-control" {...rest} />;
}
