import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DarkTheme } from "../../assets/themes";
import JobList from "./JobList";
import MyCard from "../UI/MyCard";
import JobDetailsInfo from "./JobDetailsInfo";
import { useNavigate, useParams } from "react-router-dom";
import JobShareModal from "./JobShareModal";
import AuthApi from "../../api/AuthApi";
import { API_BASE_URL } from "../../Data/apiConstants";
import axios from "axios";
import ToastContext from "../../contexts/toast-context";

const startJobDetailPage = (jobId) => {
    window.location.href = window.location.origin + "/job/detail/" + jobId;
};

export default startJobDetailPage;

/**
 * @param {string} jobId ID of job to display
 * @returns JSXElement displaying details of this job and list of related jobs
 */
export const JobDetails = (props) => {
    const params = useParams();
    const [isSharingJob, setIsSharingJob] = useState(false);
    const [relatedJobs, setRelatedJobs] = useState(undefined);
    const [job, setJob] = useState(undefined);
    const nav = useNavigate();

    const toastContext = useContext(ToastContext);

    // Call API to get Job's details
    if (job === undefined) {
        axios.get(API_BASE_URL + `/job/detail/${params.jobId}`).then((response) => {
            if (response.status === 200) {
                setJob({ ...response.data, createdDate: response.data.createdAt });
            }
        });
    }

    const selectJob = (jobId) => {
        startJobDetailPage(jobId);
    };

    const showJobShareModal = (event) => {
        event.preventDefault();
        setIsSharingJob(true);
    };

    const applyJob = (event) => {
        event.preventDefault();
        let user = AuthApi.GetCurrentUser();
        if (user) user = user.data;
        else return;
        const URL = `${API_BASE_URL}/jobapplication/create?userId=${user.id}&jobId=${params.jobId}`;
        axios
            .post(URL)
            .then((res) => {
                if (res.status === 200) {
                    toastContext.addMessage({
                        type: "success",
                        title: "Ứng tuyển thành công!",
                        content: "Bạn đã ứng tuyển thành công vào công việc này, hãy chờ nhà tuyển dụng liên lạc lại nhé!"
                    })
                }
                else {
                    toastContext.addMessage({
                        type: "error",
                        title: "Ứng tuyển thất bại!",
                        content: "Ứng tuyển không thành công, vui lòng thử lại sau giây lát!"
                    })
                }
            })
            .catch((err) => {
                toastContext.addMessage({
                    type: "error",
                    title: "Ứng tuyển thất bại!",
                    content: err.response.data.message
                })
            });
    };

    // Call API to get related jobs
    axios.get(API_BASE_URL + "/job").then((res) => {
        if (relatedJobs === undefined) {
            setRelatedJobs(
                res.data.map((job) => {
                    return { ...job, createdDate: new Date(job.datePosted) };
                })
            );
        }
    });

    let jobStatus = undefined;
    if (job && job.closingDate) {
        const closingDate = new Date(job.closingDate);
        if (Date.now() < closingDate) jobStatus = "opening";
        else jobStatus = "closed";
    }

    let userId = undefined;
    let user = AuthApi.GetCurrentUser();
    if (user) userId = user.data.id;

    return (
        <div style={{ color: DarkTheme.text, fontSize: "90%" }}>
            {isSharingJob && <JobShareModal title="Chia sẻ tin tuyển dụng" onClose={() => setIsSharingJob(false)} />}
            <div className="container-fluid">
                <div className="row">
                    <LeftColumn className="col-9">
                        <Title>Chi tiết công việc</Title>
                        <DetailsCard>
                            <JobDetailsInfo key={params.jobId} jobId={params.jobId} />
                        </DetailsCard>
                    </LeftColumn>
                    <RightColumn className="col-3">
                        <BackButton className="btn btn-secondary" onClick={() => nav(-1)}>
                            Quay lại
                        </BackButton>
                        <SpaceBetweenRow style={{ marginTop: "0.5rem" }}>
                            <Button
                                className="btn btn-success"
                                onClick={applyJob}
                                disabled={
                                    jobStatus !== "opening" || !userId || (userId && job && userId === job.authorId)
                                }>
                                Ứng tuyển ngay
                            </Button>
                            <Button className="btn btn-primary" onClick={showJobShareModal}>
                                Chia sẻ
                            </Button>
                        </SpaceBetweenRow>
                        <JobsLabel>Có thể bạn quan tâm</JobsLabel>
                        {relatedJobs && <JobList jobs={relatedJobs} onSelectJob={selectJob} />}
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
