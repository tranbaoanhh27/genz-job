import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobDetails from "../../components/Recruiter/Job/JobDetails";
import RecruiterCreateJob from "../../components/Recruiter/Job/CreateJob";
import RecruiterJobs from "../../components/Recruiter/Job/Jobs";
import { EMPTY_JOBS } from "../../Data/initialData";
import { DarkTheme } from "../../assets/themes";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";
import AuthApi from "../../api/AuthApi";

const RecruiterJobPage = (props) => {
    document.body.style.background = DarkTheme.background;

    const [jobs, setJobs] = useState(undefined);
    const [currentJob, setCurrenJob] = useState(undefined);
    const [isCreatingJob, setIsCreatingJob] = useState(false);

    // Get user's created jobs
    const userId = AuthApi.GetCurrentUser().data.id;
    const URL = API_BASE_URL + `/job/${userId}/getJobs`;
    axios.get(URL).then((response) => {
        console.log(response);
        const data = [...response.data].map((job) => ({
            id: job.id,
            title: job.title,
            company: job.company || "Không rõ",
            description: job.description,
            createdDate: new Date(job.createdAt),
            imageUrl: job.imageUrl || "",
        }));
        if (jobs === undefined) setJobs(data);
    });

    const selectJobHandler = (jobId) => {
        if (jobs === undefined) return;
        const searchResult = jobs.filter((job) => job.id === jobId);
        if (searchResult.length > 0) setCurrenJob(searchResult[0]);
    };

    const startCreatingJob = () => {
        setIsCreatingJob(true);
    };

    const stopCreatingJob = () => {
        setIsCreatingJob(false);
    };

    return (
        <div
            className="container-flex"
            style={{ paddingInline: "2rem", color: DarkTheme.text, fontSize: "90%" }}>
            <Row className="row">
                <div className="col">
                    {!isCreatingJob && <RecruiterJobDetails job={currentJob} />}
                    {isCreatingJob && <RecruiterCreateJob onCancel={stopCreatingJob} />}
                </div>
                <StartAlignedColumn className="col-3">
                    <Button className="btn btn-primary" onClick={startCreatingJob}>
                        Tin tuyển dụng mới
                    </Button>
                    <RecruiterJobs
                        jobs={jobs === undefined ? EMPTY_JOBS : jobs}
                        onSelectJob={selectJobHandler}
                    />
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
