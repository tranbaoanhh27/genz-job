import React from "react";
import styled from "styled-components";
import MyCard from "../../UI/MyCard";
import RecruiterJobImage from "./JobImage";
import RecruiterJobInfo from "./JobInfo";

const RecruiterJobDetails = (props) => {
    /*
        props = {
            job = {
                id: string
                title: string
                company: string
                description: string
                createdDate: Date
                imageUrl: string
            }
        }
    */
    return (
        <Card>
            <div className="row">
                <RecruiterJobImage className="col-2" imageUrl={props.job.imageUrl} />
                <RecruiterJobInfo key={props.job.id} className="col" job={props.job} />
            </div>
            <ButtonContainer>
                <Button type="button" className="btn btn-danger" style={{ marginInlineEnd: "2rem" }}>
                    Xóa tin tuyển dụng này
                </Button>
                <Button type="button" className="btn btn-success">
                    Lưu các chỉnh sửa
                </Button>
            </ButtonContainer>
            <SpaceBetweenRow style={{ marginTop: "1rem" }}>
                <label>Danh sách đơn ứng tuyển</label>
                <a href="https://google.com">Các ứng viên tiềm năng</a>
            </SpaceBetweenRow>
            <div className="row"></div>
        </Card>
    );
};

export default RecruiterJobDetails;

// Styled Components
const Card = styled(MyCard)`
    background: #242526;
    width: 100%;
    height: 100%;
    margin: auto;
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    border-radius: 30px;
    padding-inline: 2rem;
`;

const SpaceBetweenRow = styled.div`
    display: flex;
    justify-content: space-between;
`;
