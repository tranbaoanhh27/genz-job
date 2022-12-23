import React, { useState } from "react";
import "./../../assets/css/App.css";

export function CardJob({ job }) {

    console.log("hi")
    return (
        <div className="card card-job" style={{height: "17em"}}>
            <div className="card-body">

                <div className="card-title h-25">
                    <h5 className="multiline-ellipse">{job.name}</h5>
                </div>

                <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fa-solid fa-building"></i></span>{job.recruiter}</li>
                    <li><span className="fa-li"><i className="fa-solid fa-location-dot"></i></span>{job.location}</li>
                    <li><span className="fa-li"><i className="fa-solid fa-money-bill-wave"></i></span>{job.salary}</li>
                    <li><span className="fa-li"><i className="fa-solid fa-briefcase"></i></span>{job.numberOfExp}</li>
                    <li><span className="fa-li"><i className="fa-solid fa-pen-to-square"></i></span>{job.lastUpdate}</li>
                    
                </ul>
                <div className="card-text mt-4"><i className="fa-solid fa-clock" style={{marginRight: "0.5em"}}></i>{job.closeTime}</div>

                <a href='#' className="stretched-link"></a>
            </div>
        </div>
    )
}