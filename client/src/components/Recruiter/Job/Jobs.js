import React from "react";
import styled from "styled-components";
import RecruiterJobFilter from "./JobFilter";
import JobList from "../../Job/JobList";
import RecruiterJobSearch from "./JobSearch";

const RecruiterJobs = (props) => {
    return (
        <Column>
            <RecruiterJobSearch />
            <RecruiterJobFilter />
            <JobList jobs={props.jobs} onSelectJob={props.onSelectJob} />
        </Column>
    );
};

export default RecruiterJobs;

const Column = styled.div`
    margin-top: 1rem;
    height: calc(100vh - 15rem);
`;
