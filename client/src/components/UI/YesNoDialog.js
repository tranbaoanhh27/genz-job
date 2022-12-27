import React, { useState } from "react";
import styled from "styled-components";
import MyCard from "./MyCard";
import { DarkTheme } from "../../assets/themes";

/**
 * React Component represents a dialog for choosing between Yes and No
 * @param {String} title Title of dialog
 * @param {String} message Message to show in dialog
 * @param {Function} onYes Function to be executed when user choose YES
 * @param {Function} onNo Function to be executed when user choose NO
 * @returns A JSXElement representing the component
 */
const YesNoDialog = (props) => {
    return (
        <>
            <DisabledBackground />
            <ModalCard>
                <Header>
                    <h5>{props.title}</h5>
                </Header>
                <Content>
                    <p>{props.message}</p>
                </Content>
                <Actions>
                    <Button className="btn btn-secondary" onClick={props.onNo}>
                        Không
                    </Button>
                    <Button className="btn btn-danger" onClick={props.onYes}>
                        Có
                    </Button>
                </Actions>
            </ModalCard>
        </>
    );
};

export default YesNoDialog;

const ModalCard = styled(MyCard)`
    padding: 0.5rem;
    position: fixed;
    top: 30%;
    left: 30%;
    width: 40%;
    max-height: 40%;
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
    background: ${DarkTheme.button};
    color: ${DarkTheme.text};
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
