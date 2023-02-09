import React, { useState } from "react";
import styled from "styled-components";
import MyCard from "../../UI/MyCard";
import { DarkTheme } from "../../../assets/themes";
import RecommendItem from "./RecommendItem";
import axios from "axios";
import { API_BASE_URL } from "../../../Data/apiConstants";
import Loader from "../../UI/Loader";

const Recommends = (props) => {
    const [recommendedUsers, setRecommendedUsers] = useState(undefined);
    const [loading, setLoading] = useState(false);

    if (recommendedUsers === undefined) {
        // Call API to get all job seekers
        if (!loading) setLoading(true);
        const URL = `${API_BASE_URL}/role/all?roleName=job-seeker`;
        axios
            .get(URL)
            .then((res) => {
                if (loading) setLoading(false);
                if (res.status === 200) setRecommendedUsers(res.data.data.map((item) => item.User));
            })
            .catch((err) => {
                if (loading) setLoading(false);
            });
    }

    const removeUser = (userId) => {
        setRecommendedUsers((prevUsers) => {
            return prevUsers.filter((user) => user.id !== userId);
        });
    };

    return (
        <>
            <DisabledBackground />
            <ModalCard>
                <Header>
                    <h5>Các ứng viên tiềm năng</h5>
                    <Button onClick={props.onClose}>Đóng</Button>
                </Header>
                <Content>
                    {loading && (
                        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                            <Loader size="3rem" />
                        </div>
                    )}
                    {!loading && (
                        <RecommendedList className="list-group">
                            {recommendedUsers &&
                                recommendedUsers.map((user) => (
                                    <RecommendItem
                                        key={user.id}
                                        jobTitle={props.jobTitle}
                                        user={user}
                                        onSkip={removeUser}
                                    />
                                ))}
                        </RecommendedList>
                    )}
                </Content>
            </ModalCard>
        </>
    );
};

export default Recommends;

const ModalCard = styled(MyCard)`
    padding: 0.5rem;
    position: fixed;
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
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
    display: flex;
    justify-content: space-between;
    height: 10%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    & h5 {
        color: white;
        width: fit-content;
        margin-inline-start: 2rem;
        height: fit-content;
    }

    & button {
        background: ${DarkTheme.button};
        color: ${DarkTheme.text};
        height: fit-content;
    }
`;

const Content = styled.div`
    padding: 1rem;
    height: 90%;
    width: 100%;
`;

const RecommendedList = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
`;

const SAMPLE = [
    {
        id: 1,
        UserName: "tranbaoanh.recruiter#1",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 2,
        UserName: "tranbaoanh.recruiter#2",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 3,
        UserName: "tranbaoanh.recruiter#3",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 4,
        UserName: "tranbaoanh.recruiter#4",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 5,
        UserName: "tranbaoanh.recruiter#1",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 6,
        UserName: "tranbaoanh.recruiter#2",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 7,
        UserName: "tranbaoanh.recruiter#3",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 8,
        UserName: "tranbaoanh.recruiter#4",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 9,
        UserName: "tranbaoanh.recruiter#1",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 10,
        UserName: "tranbaoanh.recruiter#2",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 11,
        UserName: "tranbaoanh.recruiter#3",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
    {
        id: 12,
        UserName: "tranbaoanh.recruiter#4",
        Password: "$2a$08$RM0QN2xCNvu00SH3nrS4iOHIlk5o0O5jiZzJUdXuMBxzuTueWWr.O",
        Email: "tranbaoanhh27@gmail.com",
        UserGuid: "1ca6ff26-a8f3-448f-9568-002c1c1ff659",
        LastActivyDate: "2022-12-26T07:54:12.852Z",
        CreatedDate: "2022-12-26T07:54:12.852Z",
    },
];
