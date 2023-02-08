import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobDetails from "../../components/Recruiter/Job/JobDetails";
import RecruiterCreateJob from "../../components/Recruiter/Job/CreateJob";
import RecruiterJobs from "../../components/Recruiter/Job/Jobs";
import { DarkTheme } from "../../assets/themes";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";
import AuthApi from "../../api/AuthApi";
import Loader from "../../components/UI/Loader";

const RecruiterJobPage = (props) => {
    document.body.style.background = DarkTheme.background;

    const [jobs, setJobs] = useState(undefined);
    const [currentJob, setCurrenJob] = useState(undefined);
    const [isCreatingJob, setIsCreatingJob] = useState(false);

    // Get user's created jobs
    if (jobs === undefined) {
        const userId = AuthApi.GetCurrentUser().data.id;
        const URL = API_BASE_URL + `/job/${userId}/getJobs`;
        axios.get(URL).then((response) => {
            console.log(response);
            const data = [...response.data].map((job) => ({
                ...job,
                id: job.id,
                title: job.title,
                company: job.company || "Không rõ",
                description: job.description,
                createdDate: new Date(job.createdAt),
                imageUrl: job.imageUrl || "",
            }));
            setJobs(data);
        });
    }

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

    const reloadJobs = () => setJobs(undefined);

    return (
        <div className="container-flex" style={{ paddingInline: "2rem", color: DarkTheme.text, fontSize: "90%" }}>
            <Row className="row">
                <div className="col">
                    {!isCreatingJob && (
                        <RecruiterJobDetails
                            key={(currentJob && currentJob.id) || Math.random()}
                            job={currentJob}
                            reloadJobs={reloadJobs}
                        />
                    )}
                    {isCreatingJob && <RecruiterCreateJob onCancel={stopCreatingJob} onCreateComplete={reloadJobs} />}
                </div>
                <RightColumn className="col-3">
                    <Button className="btn btn-primary" onClick={startCreatingJob}>
                        Tin tuyển dụng mới
                    </Button>
                    {jobs && <RecruiterJobs jobs={jobs} onSelectJob={selectJobHandler} />}
                    {!jobs && (
                        <CenterRow style={{ marginTop: "2rem" }}>
                            <Loader size="50px" />
                        </CenterRow>
                    )}
                </RightColumn>
            </Row>
        </div>
    );
};

export default RecruiterJobPage;

// Styled Components
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: calc(100vh - 6rem);
`;

const Button = styled.button`
    height: 10%;
`;

const Row = styled.div`
    height: calc(100vh - 6rem);
`;

const CenterRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
