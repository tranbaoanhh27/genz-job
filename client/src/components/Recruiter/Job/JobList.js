import React, { useState } from "react";
import RecruiterJobListItem from "./JobListItem";

const RecruiterJobList = (props) => {
    /*
        props = {
            jobs: arrray of job = {
                id: string
                title: string
                company: string
                description: string
                createdDate: Date
                imageUrl: string
            }
        }
    */
    const [currentActive, setCurrentActive] = useState(props.jobs[0].id);

    const itemClickHandler = (jobId) => {
        setCurrentActive(jobId);
        props.onSelectJob(jobId);
    }

    return (
        <div
            className="list-group"
            style={{
                marginTop: "0.5rem",
                overflowX: "hidden",
                overflowY: "scroll",
                maxHeight: "25rem",
                borderRadius: "15px"
            }}>
            {props.jobs.map((job) => (
                <RecruiterJobListItem
                    key={job.id}
                    jobId={job.id}
                    jobTitle={job.title}
                    jobCreatedDate={job.createdDate}
                    isActive={job.id === currentActive ? true : false}
                    onItemClick={itemClickHandler}
                />
            ))}
        </div>
    );
};

export default RecruiterJobList;
