import React from "react";
import styled from "styled-components";
import MyCard from "../../UI/MyCard";
import { DarkTheme } from "../../../assets/themes";

const JobShareModal = (props) => {
    return (
        <>
            <DisabledBackground onClick={props.onClose} />
            <ModalCard>
                <Header>
                    <h5>{props.title}</h5>
                </Header>
                <Content>{props.message}</Content>
                <Actions>
                    <Button onClick={props.onClose}>Đóng</Button>
                </Actions>
            </ModalCard>
        </>
    );
};

export default JobShareModal;

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
    background: ${DarkTheme.button};
    color: ${DarkTheme.text};
    padding: 0.25rem 1rem;
    cursor: pointer;

    &:hover,
    &:active {
        background: #dc3545;
        border-color: #dc3545;
    }

    &:focus {
        outline: none;
    }
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

const Content = styled.p`
    padding: 1rem;
`;

const Actions = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;
