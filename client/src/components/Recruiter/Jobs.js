import React from "react";
import RecruiterJobFilter from "./JobFilter";
import RecruiterJobList from "./JobList";
import RecruiterJobSearch from "./JobSearch";

const RecruiterJobs = (props) => {
    return (
        <div style={{ ...props.style, marginTop: "1rem" }}>
            <RecruiterJobSearch />
            <RecruiterJobFilter />
            <RecruiterJobList jobs={props.jobs} onSelectJob={props.onSelectJob}/>
        </div>
    );
};

export default RecruiterJobs;
