import React, { useState } from "react";
import styled from "styled-components";
import RecruiterJobDetails from "../../components/Recruiter/Job/JobDetails";
import RecruiterJobs from "../../components/Recruiter/Job/Jobs";

const JOBS = [
    {
        id: "job#1",
        title: "Chuyên viên Quét rác",
        company: "Microsoft Corporation",
        description: "Quét rác every day",
        createdDate: new Date("2020-11-11"),
        imageUrl:
            "https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg",
    },
    {
        id: "job#2",
        title: "Chuyên viên Lau nhà",
        company: "Microsoft Corporation",
        description: "Lau nhà every day",
        createdDate: new Date("2020-11-11"),
        imageUrl: "https://media.vneconomy.vn/images/upload/2022/11/21/microsoft.jpg",
    },
    {
        id: "job#3",
        title: "Quét rác",
        company: "Microsoft Corporation",
        description: "Quét rác every day",
        createdDate: new Date("2020-11-11"),
        imageUrl: "https://media.vneconomy.vn/images/upload/2022/11/21/microsoft.jpg",
    },
    {
        id: "job#4",
        title: "Quét rác",
        company: "Microsoft Corporation",
        description: "Quét rác every day",
        createdDate: new Date("2020-11-11"),
        imageUrl: "https://media.vneconomy.vn/images/upload/2022/11/21/microsoft.jpg",
    },
    {
        id: "job#5",
        title: "Quét rác",
        company: "Microsoft Corporation",
        description: "Quét rác every day",
        createdDate: new Date("2020-11-11"),
        imageUrl: "https://media.vneconomy.vn/images/upload/2022/11/21/microsoft.jpg",
    },
];

const RecruiterJobPage = (props) => {
    const [currentJob, setCurrenJob] = useState(JOBS[0]);

    const selectJobHandler = (jobId) => {
        setCurrenJob(JOBS.filter((job) => job.id === jobId)[0]);
    };

    return (
        <div className="container-flex" style={{ paddingInline: "2rem" }}>
            <div className="row">
                <div className="col">
                    <RecruiterJobDetails job={currentJob} />
                </div>
                <SpaceBetweenColumn className="col-3">
                    <button className="btn btn-primary">Tin tuyển dụng mới</button>
                    <RecruiterJobs jobs={JOBS} onSelectJob={selectJobHandler} />
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
