import React, { useState, useEffect } from "react";
import { listJobStatus } from "../../../Data/Profile";

function JobStatusCard( {job} ) {
    return (
        <div className="card mb-2">
            <div className='row'>
                <div className='col-sm-9'>
                    <div className='card-body'>
                        <h5 className='card-title'>{job.nameJob}</h5>
                        <p>{job.detail}</p>
                    </div>
                </div>  
                <div className='col-sm-3'>
                    <div className='card-body'>
                        <p className='text-muted'>{job.status}</p>
                        <a href='#' className='btn btn-primary'>Detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ListJobStatus() {

    const [listJob, setListJob] = useState([]);

    useEffect( () => {
        setListJob( listJobStatus);
    }, []);

    return (
        <div className="scroll tab-pane mt-2" id="listJob" style={{maxHeight: "80vh", overflowY: "auto"}}>
            { listJobStatus.map( (job) => <JobStatusCard job={job}></JobStatusCard> ) }
        </div>
    )
}