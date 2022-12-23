import React, { useState } from "react";

export function CardJob({ nameJob }) {

    return (
        <div className="card" style={{height: "15em"}}>
            <div className="card-body">
                <div className="card-title h-25">{nameJob}</div>
                <div className="card-text">Some information</div>
            </div>
        </div>
    )
}