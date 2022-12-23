import React, { useState } from "react";
import JobListItem from "./JobListItem";

/**
 *
 * @param {array} jobs Array of job
 * @param {function} onSelectJob function to execute when a job is selected
 * @returns
 */
const JobList = (props) => {
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
            onSelectJob: function(jobId)
        }
    */
    const [currentActive, setCurrentActive] = useState(props.jobs[0].id);

    const itemClickHandler = (jobId) => {
        setCurrentActive(jobId);
        props.onSelectJob(jobId);
    };

    return (
        <div
            className="list-group"
            style={{
                marginTop: "0.5rem",
                height: "100%",
                overflowX: "hidden",
                overflowY: "scroll",
                borderRadius: "15px",
            }}>
            {props.jobs.map((job) => (
                <JobListItem
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

export default JobList;
