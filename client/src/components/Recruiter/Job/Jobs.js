import React from "react";
import RecruiterJobFilter from "./JobFilter";
import JobList from "../../Job/JobList";
import RecruiterJobSearch from "./JobSearch";

const RecruiterJobs = (props) => {
    console.log(props.jobs);
    return (
        <div style={{ ...props.style, marginTop: "1rem" }}>
            <RecruiterJobSearch />
            <RecruiterJobFilter />
            <JobList jobs={props.jobs} onSelectJob={props.onSelectJob} />
        </div>
    );
};

export default RecruiterJobs;
