import React, { useState, useEffect } from "react";
import { listJobStatus } from "../../../Data/Profile";
import ProfileApi from "../../../api/ProfileApi";

function JobStatusCard( {job} ) {
    return (
        <div className="card mb-2">
            <div className='row'>
                <div className='col-sm-9'>
                    <div className='card-body'>
                        <h5 className='card-title'>{job.title}</h5>
                        <p>{job.detail}</p>
                    </div>
                </div>  
                <div className='col-sm-3'>
                    <div className='card-body'>
                        {/* <p className='text-muted'>{job.status}</p> */}
                        <a href={"/job/detail/" + job.id} className='btn btn-primary'>Chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ListJobStatus({ user }) {

    const [listJob, setListJob] = useState([]);

    useEffect( () => {
        ProfileApi.GetBookmarkedJobs(user)
        .then(response => {
            console.log("response:");
            console.log(response);
            var jobList = response.map(item => item.Job);
            setListJob( jobList );
        });
    }, [user.id]);

    return (
        <div className="scroll tab-pane mt-2" id="listJob" style={{maxHeight: "80vh", overflowY: "auto"}}>
            { listJob.map( (job) => <JobStatusCard job={job}></JobStatusCard> ) }
        </div>
    )
}