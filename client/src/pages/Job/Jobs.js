import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobDetails from "../../components/Recruiter/Job/JobDetails";
import RecruiterJobs from "../../components/Recruiter/Job/Jobs";
import { JOBS } from "../../assets/just_testing_data";

const RecruiterJobPage = (props) => {
    const [currentJob, setCurrenJob] = useState(JOBS[0]);
    const [jobs, setJobs] = useState(JOBS);

    const selectJobHandler = (jobId) => {
        setCurrenJob(jobs.filter((job) => job.id === jobId)[0]);
    };

    return (
        <div className="container-flex" style={{ paddingInline: "2rem" }}>
            <div className="row" style={{ height: "calc(100vh - 5rem)" }}>
                <div className="col">
                    <RecruiterJobDetails job={currentJob} />
                </div>
                <SpaceBetweenColumn className="col-3">
                    <button className="btn btn-primary">Tin tuyển dụng mới</button>
                    <RecruiterJobs jobs={jobs} onSelectJob={selectJobHandler} />
                </SpaceBetweenColumn>
            </div>
        </div>
    );
};

export default RecruiterJobPage;

// Styled Components
const SpaceBetweenColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
