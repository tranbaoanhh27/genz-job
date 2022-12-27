import React, { useRef, useState } from "react";
import "./../../assets/css/App.css";

import { createBookmark, isBookmarked } from './../../api/Bookmark';
import { Alert } from './Alert';
import AuthApi from "../../api/AuthApi";

const CardJob = ({ job, listJob, setListJob }) => {

    const [alert, setAlert] = useState({show: false});
    const userId = useRef( AuthApi.GetCurrentUser().data.id );

    const handleBookmarkClick = () => {

        const resolve = () => {
            setListJob( listJob.map( v => {
                if (v.idJob === job.idJob) {
                    return { ...v, isBookmarked: v.isBookmarked === true ? false : true}
                }
                else {
                    return v;
                }
            }));
            setAlert( {show: true, classAlert: "alert-success", info: "Lưu bài đăng tuyển dụng thành công"} )
        }

        const reject = () => {
            setAlert( {show: true, classAlert: "alert-warning", info: "Lưu bài đăng tuyển dụng thất bại"} )
        }

        createBookmark(userId.current, job.id, resolve, reject);
    }

    const handleJobCardClick = () => {
        
    }

    return (
        <div className="card card-job" style={{height: "17em"}}>
            <div className="card-body">

                <div className="card-title h-25">
                    <div className="row w-100">
                            <div className="col-11">
                                <h5 className="multiline-ellipse">{job.title}</h5>
                            </div>
                            <div className="col">
                                <i className= { (isBookmarked(userId.current, job.id) === false ? "fa-regular" : "fa-solid") + " fa-bookmark"} style={{zIndex: "2", position: "relative"}} onClick={handleBookmarkClick}></i>
                            </div>  
                    </div>
                </div>

                <div className="row w-100">
                    <div className="col" style={{whiteSpace: "nowrap", overflowX: "hidden"}}>
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fa-solid fa-building"></i></span>{job.company}</li>
                            
                            <li><span className="fa-li"><i className="fa-solid fa-money-bill-wave"></i></span>{job.salary}</li>
                            
                            <li><span className="fa-li"><i className="fa-solid fa-pen-to-square"></i></span>{job.updatedAt}</li>
                        </ul>
                    </div>
                </div>
                <div className="card-text mt-4"><i className="fa-solid fa-clock" style={{marginRight: "0.5em"}}></i>{job.closingDate}</div>

                <a href={`/job/detail/${job.id}`} className="stretched-link"></a>
            </div>

            {alert.show === true ? <Alert alert={alert} setAlert={setAlert} /> : null}
        </div>
    )
}

export { CardJob };