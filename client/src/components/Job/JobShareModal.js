import React, { useState } from "react";
import styled from "styled-components";
import MyCard from "../UI/MyCard";
import { DarkTheme } from "../../assets/themes";
import { API_BASE_URL } from "../../Data/apiConstants";
import axios from "axios";
import AuthApi from "../../api/AuthApi";
import { sendMessage } from "../Messages/chat-form/Chat-Form";

const JobShareModal = (props) => {
    const [copied, setCopied] = useState(false);
    const [isShareViaMessage, setIsShareViaMessage] = useState(false);

    return (
        <>
            <DisabledBackground />
            <ModalCard>
                <Header>
                    <h5>{props.title}</h5>
                </Header>
                <Content>
                    {!isShareViaMessage && <LinkCopyGroup onCopy={() => setCopied(true)} />}
                    {isShareViaMessage && <ShareViaMessage />}
                    {copied && <p>Đã sao chép vào bộ nhớ tạm</p>}
                </Content>
                <Actions>
                    <Button className="btn btn-danger" onClick={props.onClose}>
                        Đóng
                    </Button>
                    {!isShareViaMessage && (
                        <Button className="btn btn-primary" onClick={() => setIsShareViaMessage(true)}>
                            Chia sẻ qua tin nhắn
                        </Button>
                    )}
                    {isShareViaMessage && (
                        <Button className="btn btn-primary" onClick={() => setIsShareViaMessage(false)}>
                            Sao chép đường dẫn
                        </Button>
                    )}
                </Actions>
            </ModalCard>
        </>
    );
};

export default JobShareModal;

const LinkCopyGroup = (props) => {
    const copyLinkHandler = () => {
        // Copy link
        navigator.clipboard.writeText(window.location.href);

        // Show message
        props.onCopy();
    };

    return (
        <div className="input-group">
            <input type="text" className="form-control" value={window.location.href} readOnly={true} />
            <button className="btn btn-success" type="button" onClick={copyLinkHandler}>
                Sao chép
            </button>
        </div>
    );
};

const ShareViaMessage = (props) => {
    const [users, setUsers] = useState([]);
    const [receiverId, setReceiverId] = useState(undefined);
    const [receiverName, setReceiverName] = useState(undefined);
    const [isShared, setIsShared] = useState(false);

    // Call API to get users
    const URL = API_BASE_URL + "/user";
    axios.get(URL).then((response) => {
        // If success
        if (response.status === 200) {
            setUsers(response.data);
            if (receiverId === undefined && response.data.length > 0) {
                setReceiverId(response.data[0].id);
                setReceiverName(response.data[0].UserName);
            }
        }
    });

    const receiverChangeHandler = (event) => {
        setIsShared(false);
        setReceiverId(Number(event.target.value));
        const name = users.filter((user) => +user.id === +event.target.value)[0].UserName;
        setReceiverName(name);
    };

    const shareViaMessage = () => {
        // Prepare data
        let sender = AuthApi.GetCurrentUser();
        if (sender) sender = sender.data;
        else return;
        const senderId = sender.id;
        const senderName = sender.UserName;
        const message = "Có thể bạn sẽ thích công việc này đấy!";

        // Send message if inputs are valid
        if (receiverId !== undefined && receiverName !== undefined) {
            sendMessage(senderId, receiverId, senderName, receiverName, message);
            sendMessage(senderId, receiverId, senderName, receiverName, window.location.href);
            // Show success message
            setIsShared(true);
        }
    };

    return (
        <>
            <label>Bạn muốn chia sẻ tin tuyển dụng đến cho ai?</label>
            <div className="input-group">
                <select className="form-control" value={receiverId} onChange={receiverChangeHandler}>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.UserName}
                        </option>
                    ))}
                </select>
                <button className="btn btn-success" type="button" onClick={shareViaMessage}>
                    Gửi
                </button>
            </div>
            {isShared && <p style={{ color: "green" }}>Đã chia sẻ công việc qua tin nhắn!</p>}
        </>
    );
};

const ModalCard = styled(MyCard)`
    padding: 0.5rem;
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
    text-align: start;
    background: ${DarkTheme.card};

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }
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
        margin: 0;
        color: white;
    }
`;

const Content = styled.div`
    padding: 1rem;

    & p {
        margin-top: 1rem;
        color: #198754;
    }
`;

const Actions = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;
