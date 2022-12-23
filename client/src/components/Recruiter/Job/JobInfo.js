import React, { useState } from "react";
import styled from "styled-components";

const RecruiterJobInfo = (props) => {
    const [title, setTitle] = useState(props.job.title);
    const [company, setCompany] = useState(props.job.company);
    const [description, setDescription] = useState(props.job.description);

    const jobTitleChangeHandler = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const jobCompanyChangeHandler = (event) => {
        console.log(event.target.value);
        setCompany(event.target.value);
    };

    const jobDescriptionChangeHandler = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value);
    };

    return (
        <FlexColumn className={`${props.className}`}>
            <div className="row">
                <JobInfoLabel className="col-3">Tiêu đề:</JobInfoLabel>
                <JobInfoInput className="col" type="text" value={title} onChange={jobTitleChangeHandler} />
            </div>
            <div className="row" style={{ marginTop: "0.5rem" }}>
                <JobInfoLabel className="col-3">Công ty:</JobInfoLabel>
                <JobInfoInput className="col" type="text" value={company} onChange={jobCompanyChangeHandler} />
            </div>
            <div className="row" style={{ marginTop: "0.5rem", flex: "1" }}>
                <JobInfoLabel className="col-3">Mô tả công việc:</JobInfoLabel>
                <JobInfoTextArea className="col" value={description} onChange={jobDescriptionChangeHandler} />
            </div>
        </FlexColumn>
    );
};

export default RecruiterJobInfo;

// Styled Components
const JobInfoLabel = styled.label`
    text-align: start;
`;

const JobInfoInput = styled.input`
    background: #3a3b3c;
    color: white;
    border: none;
    border-radius: 5px;
`;

const JobInfoTextArea = styled.textarea`
    background: #3a3b3c;
    color: white;
    border: none;
    border-radius: 5px;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
