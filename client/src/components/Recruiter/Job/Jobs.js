import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobFilter from "./JobFilter";
import JobList from "../../Job/JobList";
import RecruiterJobSearch from "./JobSearch";

const RecruiterJobs = (props) => {
    const [sortMode, setSortMode] = useState("sortByTitle"); // oldestFirst or latestFirst or sortByTitle
    const [keyword, setKeyword] = useState(undefined); // for searching jobs

    // Sort jobs
    let sortedJobs = [...props.jobs];
    let compareFunction = undefined;
    const compareFunctionDecisions = {
        latestFirst: (a, b) => b.createdDate - a.createdDate,
        oldestFirst: (a, b) => a.createdDate - b.createdDate,
        sortByTitle: (a, b) => a.title.localeCompare(b.title),
    };
    compareFunction = compareFunctionDecisions[sortMode];
    if (compareFunction !== undefined) sortedJobs = sortedJobs.sort(compareFunction);

    // Filter jobs by keyword
    let filteredJobs = [...sortedJobs];
    if (keyword !== undefined)
        filteredJobs = filteredJobs.filter((job) =>
            job.title.toLowerCase().includes(keyword.toLowerCase())
        );

    return (
        <Column>
            <RecruiterJobSearch onChangeKeyword={(keyword) => setKeyword(keyword)} />
            <RecruiterJobFilter onChangeSortMode={(sortMode) => setSortMode(sortMode)} />
            {filteredJobs && filteredJobs.length > 0 && (
                <JobList jobs={filteredJobs} onSelectJob={props.onSelectJob} />
            )}
        </Column>
    );
};

export default RecruiterJobs;

const Column = styled.div`
    padding-top: 1rem;
    height: 90%;
`;
