import React from "react";
import styled from "styled-components";
import { EMPTY_JOB } from "../../../Data/initialData";
import MyCard from "../../UI/MyCard";
import CandidateItem from "./CandidateItem";
import CandidateList from "./CandidateList";
import RecruiterJobImage from "./JobImage";
import RecruiterJobInfo from "./JobInfo";

const RecruiterJobDetails = (props) => {
    return (
        <Card>
            {props.job && (
                <>
                    <VerticalHalf className="row">
                        <RecruiterJobImage className="col-2" imageUrl={props.job.imageUrl} />
                        <RecruiterJobInfo key={props.job.id} className="col" job={props.job} />
                        <ButtonContainer>
                            <Button
                                type="button"
                                className="btn btn-danger"
                                style={{ marginInlineEnd: "2rem" }}>
                                Xóa tin tuyển dụng này
                            </Button>
                            <Button type="button" className="btn btn-success">
                                Lưu các chỉnh sửa
                            </Button>
                        </ButtonContainer>
                    </VerticalHalf>
                    <VerticalHalf className="row">
                        <SpaceBetweenRow style={{ marginTop: "1rem" }}>
                            <label>Danh sách đơn ứng tuyển</label>
                            <a href="https://google.com">Các ứng viên tiềm năng</a>
                        </SpaceBetweenRow>
                        <CandidateList jobApplications={SAMPLE_APPLICATIONS} />
                    </VerticalHalf>
                </>
            )}
            {!props.job && (
                <h1>
                    Hãy chọn một tin tuyển dụng trong danh sách bên cạnh, hoặc tạo tin tuyển dụng
                    mới!
                </h1>
            )}
        </Card>
    );
};

export default RecruiterJobDetails;

// Helpers
const SAMPLE_APPLICATIONS = [
    {
        id: 1,
        candidateName: "Trần Bảo Anh",
        candidateLevel: "Intern",
        applyTime: new Date("2011-11-11"),
        applyStatus: 1,
    },
    {
        id: 2,
        candidateName: "Trần Bảo Anh",
        applyTime: new Date("2011-11-11"),
        applyStatus: 2,
    },
    {
        id: 3,
        candidateName: "Trần Bảo Anh",
        candidateLevel: "Intern",
        applyTime: new Date("2011-11-11"),
        applyStatus: 3,
    },
];

// Styled Components
const Card = styled(MyCard)`
    background: #242526;
    width: 100%;
    height: calc(100vh - 6rem);
    margin: auto;
`;

const VerticalHalf = styled.div`
    height: 50%;
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    border-radius: 30px;
    padding-inline: 2rem;
    height: fit-content;
`;

const SpaceBetweenRow = styled.div`
    display: flex;
    justify-content: space-between;
`;
