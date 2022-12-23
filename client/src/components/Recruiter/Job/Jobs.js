import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobFilter from "./JobFilter";
import JobList from "../../Job/JobList";
import RecruiterJobSearch from "./JobSearch";

const RecruiterJobs = (props) => {
    const [sortMode, setSortMode] = useState("sortByTitle"); // oldestFirst or latestFirst or sortByTitle

    let sortedJobs = [...props.jobs];

    let compareFunction = undefined;
    if (sortMode === "latestFirst") compareFunction = (a, b) => b.createdDate - a.createdDate;
    else if (sortMode === "oldestFirst") compareFunction = (a, b) => a.createdDate - b.createdDate;
    else if (sortMode === "sortByTitle")
        compareFunction = (a, b) => {
            return a.title.localeCompare(b.title);
        };

    if (compareFunction !== undefined) sortedJobs = sortedJobs.sort(compareFunction);

    return (
        <Column>
            <RecruiterJobSearch />
            <RecruiterJobFilter onChangeSortMode={(sortMode) => setSortMode(sortMode)} />
            <JobList jobs={sortedJobs} onSelectJob={props.onSelectJob} />
        </Column>
    );
};

export default RecruiterJobs;

const Column = styled.div`
    margin-top: 1rem;
    height: calc(100vh - 15rem);
`;
