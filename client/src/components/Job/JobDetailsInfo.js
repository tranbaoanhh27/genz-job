import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { DarkTheme } from "../../assets/themes";
import { API_BASE_URL } from "../../Data/apiConstants";

const JobDetailsInfo = (props) => {
    const [job, setJobs] = useState(undefined);

    // Call API to get Job's details
    axios.get(API_BASE_URL + `/job/detail/${props.jobId}`).then((response) => {
        if (response.status === 200) {
            console.log(response.data);
            if (job === undefined)
                setJobs({ ...response.data, createdDate: response.data.createdAt });
        }
    });

    let status = undefined;
    if (job && job.closingDate) {
        const closingDate = new Date(job.closingDate);
        if (Date.now() < closingDate) status = "opening";
        else status = "closed";
    }

    return (
        <SpaceBetweenColumn>
            <SpaceBetweenRow>
                <JobImage src={(job && job.imageUrl) || DEFAULT_IMAGE_URL} />
                <SpaceBetweenColumn style={{ flex: 1 }}>
                    <JobStatus label="Trạng thái:" status={status || "unknown"} />
                    <SmallInfo label="Tên công việc:" content={(job && job.title) || "Không rõ"} />
                    <SmallInfo
                        label="Mức lương:"
                        content={"$" + (job && job.salary) || "Không rõ"}
                    />
                    <SmallInfo label="Công ty:" content={(job && job.company) || "Không rõ"} />
                </SpaceBetweenColumn>
            </SpaceBetweenRow>
            <JobDescription
                label="Mô tả công việc:"
                content={(job && job.description) || "Không rõ"}
            />
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

export const JobStatus = ({ label, status }) => {
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
                        whiteSpace: "pre-wrap",
                    }}>
                    {content}
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

const DEFAULT_IMAGE_URL = "https://www.fit.hcmus.edu.vn/vn/images/teachers/dbtien.jpg";
