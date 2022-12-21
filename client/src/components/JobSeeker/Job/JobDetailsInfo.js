import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../../../assets/themes";
import { JOBS } from "../../../assets/just_testing_data";

const JobDetailsInfo = (props) => {
    const job = getJob(props.jobId);
    return (
        <SpaceBetweenColumn>
            <SpaceBetweenRow>
                <JobImage src={job.imageUrl} />
                <SpaceBetweenColumn style={{ flex: 1 }}>
                    <JobStatus label="Trạng thái:" status={job.status} />
                    <SmallInfo label="Tên công việc:" content={job.title} />
                    <SmallInfo label="Địa chỉ:" content={job.address || "Không rõ"} />
                    <SmallInfo label="Công ty:" content={job.company} />
                </SpaceBetweenColumn>
            </SpaceBetweenRow>
            <JobDescription label="Mô tả công việc:" content={job.description} />
            <Review label="Đánh giá:" />
            <AlignEndRow>
                <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ borderRadius: "30px" }}>
                    Đăng đánh giá
                </button>
            </AlignEndRow>
        </SpaceBetweenColumn>
    );
};

export default JobDetailsInfo;

const getJob = (jobId) => {
    return JOBS.filter((job) => job.id === jobId)[0];
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

const AlignEndRow = styled.div`
    display: flex;
    justify-content: end;
`;

const JobImage = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 10px;
`;

const SmallInfo = ({ label, content }) => {
    return (
        <div className="row" style={{ marginInlineStart: "1rem" }}>
            <div className="col-2">
                <label style={{ display: "block", textAlign: "start" }}>{label}</label>
            </div>
            <div className="col">
                <p
                    style={{
                        display: "block",
                        textAlign: "start",
                        paddingInline: "1rem",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        border: "0px",
                        borderRadius: "5px",
                        background: DarkTheme.input,
                    }}>
                    {content}
                </p>
            </div>
        </div>
    );
};

const JobStatus = ({ label, status }) => {
    const badgeColor = (status) => {
        if (status === "opening") return "#198754";
        if (status === "closed") return "#dc3545";
        return "#3b3c3d";
    };

    const statusConvert = {
        opening: "Đang tuyển",
        closed: "Đã kết thúc",
    };

    return (
        <div className="row" style={{ marginInlineStart: "1rem", marginBottom: "1rem" }}>
            <div className="col-2">
                <label style={{ display: "block", textAlign: "start" }}>{label}</label>
            </div>
            <div className="col">
                <span
                    className="badge"
                    style={{
                        background: badgeColor(status),
                        textAlign: "start",
                        display: "block",
                        width: "fit-content",
                    }}>
                    {statusConvert[status] || "Không rõ"}
                </span>
            </div>
        </div>
    );
};

const JobDescription = ({ label, content }) => {
    const lines = content.split("\n");
    return (
        <div className="row">
            <div className="col-2">
                <label style={{ display: "block", textAlign: "start" }}>{label}</label>
            </div>
            <div className="col">
                <p
                    style={{
                        display: "block",
                        textAlign: "start",
                        paddingInline: "1rem",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        border: "0px",
                        borderRadius: "5px",
                        minHeight: "10vh",
                        maxHeight: "20vh",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        background: DarkTheme.input,
                    }}>
                    {lines.map((line) => (
                        <p>
                            {line}
                            <br />
                        </p>
                    ))}
                </p>
            </div>
        </div>
    );
};

const Review = ({ label }) => {
    return (
        <div className="row">
            <div className="col-2">
                <label style={{ display: "block", textAlign: "start" }}>{label}</label>
            </div>
            <div className="col">
                <textarea
                    placeholder="Viết đánh giá của bạn về công việc này..."
                    style={{
                        textAlign: "start",
                        paddingInline: "1rem",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        border: "0px",
                        borderRadius: "5px",
                        height: "18vh",
                        minHeight: "18vh",
                        maxHeight: "18vh",
                        width: "100%",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        background: DarkTheme.input,
                        color: DarkTheme.text,
                    }}
                />
            </div>
        </div>
    );
};
