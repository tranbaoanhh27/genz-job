import React, { useState } from "react";
import styled from "styled-components";
import { DarkTheme } from "../../../assets/themes";
import { JOBS } from "../../../Data/initialData";
import JobList from "../../Job/JobList";
import MyCard from "../../UI/MyCard";
import JobDetailsInfo from "./JobDetailsInfo";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import JobShareModal from "./JobShareModal";

const startJobDetailPage = (jobId) => {
    window.location.href = window.location.origin + "/job/detail/" + jobId;
};

export default startJobDetailPage;

/**
 * @param {string} jobId ID of job to display
 * @returns JSXElement displaying details of this job and list of related jobs
 */
export const JobDetails = (props) => {
    document.body.style.background = DarkTheme.background;

    const params = useParams();
    const [selectedJobId, setSelectedJobId] = useState(params.jobId || JOBS[0].id);
    const [isSharingJob, setIsSharingJob] = useState(false);
    const nav = useNavigate();

    const selectJob = (jobId) => {
        setSelectedJobId(jobId);
    };

    const showJobShareModal = (event) => {
        event.preventDefault();
        setIsSharingJob(true);
    };

    return (
        <div style={{ color: DarkTheme.text, fontSize: "90%" }}>
            {isSharingJob && (
                <JobShareModal
                    title="Chia sẻ tin tuyển dụng"
                    onClose={() => setIsSharingJob(false)}
                />
            )}
            <div className="container-fluid">
                <div className="row">
                    <LeftColumn className="col-9">
                        <Title>Chi tiết công việc</Title>
                        <DetailsCard>
                            <JobDetailsInfo key={selectedJobId} jobId={selectedJobId} />
                        </DetailsCard>
                    </LeftColumn>
                    <RightColumn className="col-3">
                        <BackButton className="btn btn-secondary" onClick={() => nav(-1)}>
                            Quay lại
                        </BackButton>
                        <SpaceBetweenRow style={{ marginTop: "0.5rem" }}>
                            <Button className="btn btn-success">Ứng tuyển ngay</Button>
                            <Button className="btn btn-primary" onClick={showJobShareModal}>
                                Chia sẻ
                            </Button>
                        </SpaceBetweenRow>
                        <JobsLabel>Có thể bạn quan tâm</JobsLabel>
                        <JobList jobs={JOBS} onSelectJob={selectJob} />
                    </RightColumn>
                </div>
            </div>
        </div>
    );
};

const SpaceBetweenColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SpaceBetweenRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftColumn = styled(SpaceBetweenColumn)``;

const RightColumn = styled(SpaceBetweenColumn)`
    height: calc(100vh - 6rem);
    justify-content: flex-start;
`;

const Title = styled.h4`
    color: white;
    align-self: center;
`;

const Button = styled.button`
    border-radius: 30px;
    padding-inline: 20px;
    border: none;
`;

const BackButton = styled(Button)`
    background: ${DarkTheme.button};
    align-self: flex-end;
`;

const JobsLabel = styled.label`
    margin-top: 1rem;
    align-self: flex-start;
`;

const DetailsCard = styled(MyCard)`
    background: ${DarkTheme.card};
    height: 100%;
    width: 100%;
    margin: 0px;
`;
