import React from "react";
import styled from "styled-components";
import MyCard from "../../UI/MyCard";
import { useNavigate } from "react-router-dom";

import "./ResultItem.css";

const Card = styled(MyCard)`
    background: ${(props) => props.theme.card};
    width: 30rem;
    height: 10rem;
    cursor: pointer;
`;

const Image = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
`;

const ResultItem = (props) => {
    const navigate = useNavigate();

    const goToProfile = (username) => {
        navigate("/" + username);
        console.log("Navigate to " + username);
    };

    return (
        <Card>
            <div className="row" onClick={() => goToProfile(props.result.title)}>
                <div className="col-1">
                    <Image src={props.result.imageUrl} />
                </div>
                <div className="col align-self-center">
                    <div className="title-text">
                        <p>{props.result.title}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ResultItem;
