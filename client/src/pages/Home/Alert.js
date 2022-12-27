import React, { useEffect, useState } from 'react';
import "./../../assets/css/App.css";

export function Alert({ alert: {show, classAlert, info}, setAlert}) {

    const closeHandle = () => {
        setAlert({...alert, show: false});
    }

    return (
        <div className={`alert ${classAlert} alert-dismissible fixed-top`}>
            <button type="button" class="btn-close" onClick={closeHandle}></button>
            {info}
        </div>
    )
}