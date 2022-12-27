import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin: 1rem auto;
    width: fit-content;
    padding-inline: 3rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    border-radius: 30px !important;
    text-align: center;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
`;

const MyCard = (props) => {
    return (
        <Card className={props.className} style={props.style} onClick={props.onClick}>
            {props.children}
        </Card>
    );
};

export default MyCard;
