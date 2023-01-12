import React, { useState } from "react";
import styled from "styled-components";
import MyCard from "../../UI/MyCard";
import { DarkTheme } from "../../../assets/themes";
import AuthApi from "../../../api/AuthApi";
import { sendMessage } from "../../Messages/chat-form/Chat-Form";

/**
 * React Component represents a modal to show details about a recommended user
 * @param {Object} user An User object with at least 4 keys {id, name, level, skills}
 * @param {String} recommendedPosition Just like parameter's name
 * @returns A JSX Element represent the component
 */
const RecommendUserDetails = (props) => {
    if (!props.user) return;

    const navigateToMessage = () => {
        let user = AuthApi.GetCurrentUser();

        if (user) user = user.data;
        else return;

        sendMessage(
            user.id,
            props.user.id,
            user.UserName,
            props.user.name,
            `Xin chào, chúng tôi liên hệ với bạn vì cảm thấy bạn phù hợp với vị trí ${
                props.recommendedPosition || "Error"
            } của công ty chúng tôi`
        ).then(() => {
            const destinationURL = window.location.origin + "/messages";
            window.location.assign(destinationURL);
        });
    };

    return (
        <>
            <DisabledBackground />
            <ModalCard>
                <Header>
                    <h5>Chi tiết ứng viên</h5>
                </Header>
                <Content className="row">
                    <LeftColumn className="col-3">
                        <Image src={DEFAULT_IMG_URL} />
                        <a href={`${window.location.origin}/p/${props.user.name}`}>Xem hồ sơ</a>
                        <Button className="btn btn-primary" onClick={navigateToMessage}>
                            Nhắn tin
                        </Button>
                    </LeftColumn>
                    <RightColumn className="col-9">
                        <Info label="Tên ứng viên:" info={props.user.name || "Không rõ"} />
                        <Info label="Mức kinh nghiệm:" info={props.user.level || "Không rõ"} />
                        <Info label="Kĩ năng:" info={props.user.skills || "Không rõ"} />
                        <Info
                            label="Được gợi ý cho vị trí:"
                            info={props.recommendedPosition || "Không rõ"}
                        />
                    </RightColumn>
                </Content>
                <Actions>
                    <Button onClick={props.onClose}>Quay lại</Button>
                </Actions>
            </ModalCard>
        </>
    );
};

export default RecommendUserDetails;

const Info = ({ label, info }) => {
    return (
        <StyledInfo className="row">
            <label className="col-4">{label}</label>
            <p className="col-8">{info}</p>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    width: 100%;
    font-size: 110%;
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
