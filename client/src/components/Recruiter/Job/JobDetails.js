import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { API_BASE_URL } from "../../../Data/apiConstants";
import MyCard from "../../UI/MyCard";
import CandidateList from "./CandidateList";
import RecruiterJobImage from "./JobImage";
import RecruiterJobInfo from "./JobInfo";
import Recommends from "./Recommends";

const RecruiterJobDetails = (props) => {
    const [candidates, setCandidates] = useState(undefined);
    const [viewRecommends, setViewRecommends] = useState(false);

    // Call API to get list of candidates of this job
    if (candidates === undefined && props.job) {
        const URL = `${API_BASE_URL}/jobapplication/all/${props.job.id}`;
        axios.get(URL).then((res) => {
            if (res.status === 200) {
                setCandidates(
                    res.data.map((jobApplication) => ({
                        ...jobApplication,
                        id: `job#${jobApplication.JobId}user#${jobApplication.UserId}`,
                        candidateName: jobApplication.User.UserName,
                        applyTime: new Date(jobApplication.createdAt),
                        applyStatus: jobApplication.StatusId,
                    }))
                );
            }
        });
    }

    const reloadCandidates = () => setCandidates(undefined);

    return (
        <>
            {viewRecommends && <Recommends jobTitle={props.job.title} onClose={() => setViewRecommends(false)} />}
            <Card>
                {props.job && (
                    <>
                        <div className="row" style={{ height: "55%" }}>
                            <RecruiterJobImage className="col-2" imageUrl={props.job.imageUrl} />
                            <RecruiterJobInfo
                                key={props.job.id}
                                className="col"
                                job={props.job}
                                onUpdated={props.reloadJobs}
                            />
                        </div>
                        <div className="row" style={{ height: "45%" }}>
                            <SpaceBetweenRow style={{ marginTop: "1rem" }}>
                                <label>Danh sách đơn ứng tuyển</label>
                                <RecommendedUsers onClick={() => setViewRecommends(true)}>
                                    Các ứng viên tiềm năng
                                </RecommendedUsers>
                            </SpaceBetweenRow>
                            <CandidateList jobApplications={candidates} reloadCandidates={reloadCandidates} />
                        </div>
                    </>
                )}
                {!props.job && (
                    <CenterColumn>
                        <h4>Hãy chọn một tin tuyển dụng trong danh sách bên cạnh, hoặc tạo tin tuyển dụng mới!</h4>
                    </CenterColumn>
                )}
            </Card>
        </>
    );
};

export default RecruiterJobDetails;

// Styled Components
const Card = styled(MyCard)`
    background: #242526;
    width: 100%;
    height: calc(100vh - 6rem);
    margin: auto;
`;

const RecommendedUsers = styled.a`
    color: #0d6efd;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`;

const SpaceBetweenRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CenterColumn = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
