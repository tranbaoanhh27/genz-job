import React, { useState } from "react";
import styled from "styled-components";
import MyCard from "../../UI/MyCard";
import { DarkTheme } from "../../../assets/themes";
import axios from "axios";
import { API_BASE_URL } from "../../../Data/apiConstants";
import { sendMessage } from "../../Messages/chat-form/Chat-Form";
import AuthApi from "../../../api/AuthApi";

const JobApplication = (props) => {
    const [jobTitle, setJobTitle] = useState(undefined);
    console.log(props.data);

    if (!props.data) return;

    const updateStatus = (newStatus) => {
        console.log(newStatus);
    };

    const navigateToMessage = () => {
        let user = AuthApi.GetCurrentUser();

        if (user) user = user.data;
        else return;

        sendMessage(
            user.id,
            props.data.UserId,
            user.UserName,
            props.data.candidateName,
            `Xin chào, chúng tôi liên hệ với bạn vì bạn đã ứng tuyển vào vị trí ${
                jobTitle || "Error"
            } của công ty chúng tôi`
        );

        window.location.href = window.location.origin + "/messages";
    };

    // Call API to get job title
    if (jobTitle === undefined) {
        axios
            .get(`${API_BASE_URL}/job/detail/${props.data.JobId}`)
            .then((res) => {
                console.log(res);
                setJobTitle(res.data.title);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <DisabledBackground onClick={props.onClose} />
            <ModalCard>
                <Header>
                    <h5>Đơn ứng tuyển</h5>
                </Header>
                <Content className="row">
                    <LeftColumn className="col-3">
                        <Image src={DEFAULT_IMG_URL} />
                        <a href={`${window.location.origin}/p/${props.data.candidateName}`}>
                            Xem hồ sơ
                        </a>
                        <Button className="btn btn-primary" onClick={navigateToMessage}>
                            Nhắn tin
                        </Button>
                    </LeftColumn>
                    <RightColumn className="col-9">
                        <Info label="Tên ứng viên:" info={props.data.candidateName} />
                        <Info label="Vị trí ứng tuyển:" info={jobTitle || "Không rõ"} />
                        <Info
                            label="Ngày nộp đơn:"
                            info={props.data.applyTime.toLocaleString("vi-VN")}
                        />
                        <Status label="Trạng thái hồ sơ:" status={props.data.StatusId} />
                    </RightColumn>
                </Content>
                <Actions>
                    {props.data.StatusId !== STATUS["NOT_DECIDED"] && (
                        <>
                            <p style={{ paddingInlineEnd: "1rem" }}>
                                Bạn không thể thay đổi quyết định khi đã chấp nhận hoặc từ chối ứng
                                viên
                            </p>
                            <Button className="btn btn-danger" onClick={props.onClose}>
                                Đóng
                            </Button>
                        </>
                    )}
                    {props.data.StatusId === STATUS["NOT_DECIDED"] && (
                        <>
                            <Button className="btn btn-secondary" onClick={props.onClose}>
                                Quyết định sau
                            </Button>
                            <Button
                                className="btn btn-success"
                                onClick={() => updateStatus(STATUS["ACCEPTED"])}>
                                Chấp nhận
                            </Button>
                            <Button
                                className="btn btn-danger"
                                onClick={() => updateStatus(STATUS["DECLINED"])}>
                                Từ chối
                            </Button>
                        </>
                    )}
                </Actions>
            </ModalCard>
        </>
    );
};

export default JobApplication;

const STATUS = {
    NOT_DECIDED: 1,
    ACCEPTED: 2,
    DECLINED: 3,
};

const Info = ({ label, info }) => {
    return (
        <StyledInfo className="row">
            <label className="col-4">{label}</label>
            <p className="col-8">{info}</p>
        </StyledInfo>
    );
};

const Status = ({ label, status }) => {
    const statusText = {
        1: "Chưa quyết định",
        2: "Đã chấp nhận",
        3: "Đã từ chối",
    };
    return (
        <StyledInfo className="row">
            <label className="col-4">{label}</label>
            <div className="col-8">
                <StatusBadge className="badge rounded-pill" status={status}>
                    {statusText[status]}
                </StatusBadge>
            </div>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    width: 100%;
    font-size: 110%;
`;

const StatusBadge = styled.span`
    background: ${(props) => {
        if (props.status === 2) return "#198754";
        if (props.status === 3) return "#dc3545";
        else return "#3b3c3d";
    }};
`;

const ModalCard = styled(MyCard)`
    padding: 0.5rem;
    position: fixed;
    top: 15%;
    left: 15%;
    width: 70%;
    max-height: 70%;
    z-index: 100;
    overflow: hidden;
    text-align: start;
    background: ${DarkTheme.card};
`;

const Button = styled.button`
    font: inherit;
    border: none;
    border-radius: 30px;
    padding: 0.25rem 1rem;
    margin-inline: 0.5rem;
    cursor: pointer;
`;

const DisabledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;

const Header = styled.header`
    padding: 1rem;

    & h5 {
        color: white;
        text-align: center;
    }
`;

const Content = styled.div`
    padding: 1rem;
`;

const Actions = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const LeftColumn = styled(Column)`
    & a {
        margin-top: 1rem;
    }

    & button {
        margin-top: 1rem;
    }
`;

const RightColumn = styled(Column)``;

const Image = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 15%;
`;

const DEFAULT_IMG_URL = "https://www.fit.hcmus.edu.vn/vn/images/teachers/dbtien.jpg";
