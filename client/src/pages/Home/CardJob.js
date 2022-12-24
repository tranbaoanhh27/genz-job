import React, { useState } from "react";
import "./../../assets/css/App.css";

import { createBookmark } from './../../api/Bookmark'

const CardJob = ({ job, listJob, setListJob, setAlert }) => {

    const handleBookmarkClick = () => {

        const [result, error] = createBookmark(1, job.idJob);
        if (error === null) {
            setListJob( listJob.map( v => {
                if (v.idJob === job.idJob) {
                    return { ...v, isBookmarked: v.isBookmarked === true ? false : true}
                }
                else {
                    return v;
                }
            }));
            setAlert({classAlert: "alert-success", info: "Lưu bài đăng tuyển dụng thành công"});
        }
        else {
            setAlert({classAlert: "alert-warning", info: "Lưu bài đăng tuyển dụng thất bại"})
        }
    }

    const handleJobCardClick = () => {
        // Do something with Job detail
    }

    console.log("hi")
    return (
        <div className="card card-job" style={{height: "17em"}}>
            <div className="card-body">

                <div className="card-title h-25">
                    <div className="row w-100">
                            <div className="col-11">
                                <h5 className="multiline-ellipse">{job.name}</h5>
                            </div>
                            <div className="col">
                                <i className= { (job.isBookmarked === false ? "fa-regular" : "fa-solid") + " fa-bookmark"} style={{zIndex: "2", position: "relative"}} onClick={handleBookmarkClick}></i>
                            </div>  
                    </div>
                </div>

                <div className="row w-100">
                    <div className="col" style={{whiteSpace: "nowrap", overflowX: "hidden"}}>
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fa-solid fa-building"></i></span>{job.recruiter}</li>
                            <li><span className="fa-li"><i className="fa-solid fa-location-dot"></i></span>{job.location}</li>
                            <li><span className="fa-li"><i className="fa-solid fa-money-bill-wave"></i></span>{job.salary}</li>
                            <li><span className="fa-li"><i className="fa-solid fa-briefcase"></i></span>{job.numberOfExp}</li>
                            <li><span className="fa-li"><i className="fa-solid fa-pen-to-square"></i></span>{job.lastUpdate}</li>
                        </ul>
                    </div>
                </div>
                <div className="card-text mt-4"><i className="fa-solid fa-clock" style={{marginRight: "0.5em"}}></i>{job.closeTime}</div>

                <a href='#' className="stretched-link"></a>
            </div>
        </div>
    )
}

export { CardJob };