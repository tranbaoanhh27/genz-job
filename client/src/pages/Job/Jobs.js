import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobDetails from "../../components/Recruiter/Job/JobDetails";
import RecruiterCreateJob from "../../components/Recruiter/Job/CreateJob";
import RecruiterJobs from "../../components/Recruiter/Job/Jobs";
import { EMPTY_JOBS } from "../../Data/initialData";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";

const RecruiterJobPage = (props) => {
    const [jobs, setJobs] = useState(EMPTY_JOBS);
    const [currentJob, setCurrenJob] = useState(EMPTY_JOBS[0]);
    const [isCreatingJob, setIsCreatingJob] = useState(false);

    // Get user's created jobs
    const URL = API_BASE_URL + "/job";
    axios.get(URL).then((response) => {
        const data = [...response.data].map((job) => ({
            id: job.id,
            title: job.title,
            company: job.company || "Không rõ",
            description: job.description,
            createdDate: new Date(job.createdAt),
            imageUrl: job.imageUrl || "",
        }));
        setJobs(data);
    });

    const selectJobHandler = (jobId) => {
        setCurrenJob(jobs.filter((job) => job.id === jobId)[0]);
    };

    const startCreatingJob = () => {
        setIsCreatingJob(true);
    };

    const stopCreatingJob = () => {
        setIsCreatingJob(false);
    };

    return (
        <div className="container-flex" style={{ paddingInline: "2rem" }}>
            <Row className="row">
                <div className="col">
                    {!isCreatingJob && <RecruiterJobDetails job={currentJob} />}
                    {isCreatingJob && <RecruiterCreateJob onCancel={stopCreatingJob} />}
                </div>
                <StartAlignedColumn className="col-3">
                    <Button className="btn btn-primary" onClick={startCreatingJob}>
                        Tin tuyển dụng mới
                    </Button>
                    <RecruiterJobs jobs={jobs} onSelectJob={selectJobHandler} />
                </StartAlignedColumn>
            </Row>
        </div>
    );
};

export default RecruiterJobPage;

// Styled Components
const StartAlignedColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Button = styled.button`
    height: 3rem;
`;

const Row = styled.div`
    height: calc(100vh - 6rem);
`;
