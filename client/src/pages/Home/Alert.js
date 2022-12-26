import React, { useEffect, useState } from 'react';
import "./../../assets/css/App.css";

export function Alert({classAlert, info, setAlert}) {

    const closeHandle = () => {
        setAlert(null);
    }

    return (
        <div className={`alert ${classAlert} alert-dismissible alert-fixed`}>
            <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={closeHandle}></button>
            {info}
        </div>
    )
}