import React from "react";
import styled from "styled-components";
import CandidateItem from "./CandidateItem";
import { DarkTheme } from "../../../assets/themes";

/**
 * A React function component representing a list of candidates.
 * @param {Array} jobApplications An array of JobApplication, each element is an Object with at least 5 keys
 * {id, candidateName, candidateLevel, applyTime, applyStatus}
 * @returns {JSXElement} A JSX Element representing a list group of CandidateItem
 */
const CandidateList = (props) => {
    return (
        <Container className="list-group">
            {props.jobApplications &&
                props.jobApplications.length > 0 &&
                props.jobApplications.map((jobApplication) => (
                    <CandidateItem
                        key={jobApplication.id}
                        jobApplication={jobApplication}
                        reloadCandidates={props.reloadCandidates}
                    />
                ))}
            {props.jobApplications && props.jobApplications.length === 0 && (
                <CenterColumn>
                    <h5>Oops! Rất tiếc, chưa có ai ứng tuyển cả</h5>
                </CenterColumn>
            )}
            {!props.jobApplications && (
                <CenterColumn>
                    <h5>Oops! Đã có lỗi xảy ra, hãy thử tải lại trang</h5>
                </CenterColumn>
            )}
        </Container>
    );
};

export default CandidateList;

const Container = styled.div`
    background: ${DarkTheme.input};
    width: 100%;
    height: 85%;
    margin-top: 0.25rem;
    padding-top: 0.5rem;
    padding-inline-end: 2rem;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const CenterColumn = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
