import React from "react";
import styled from "styled-components";

const ArticleAuthor = (props) => {
    let avatarUrl = "/assets/profiles/baoanh.png";
    if (props.avatarURL) avatarUrl = props.avatarURL;
    return (
        <div className={`row ${props.className}`}>
            <div className="col-sm-auto">
                <Avatar src={avatarUrl} />
            </div>
            <NameAndDate className="col-md-auto">
                <label className="row">{props.authorName}</label>
                <label className="row">{props.createDate.toLocaleString("vi-VN")}</label>
            </NameAndDate>
        </div>
    );
};

export default ArticleAuthor;

// Styled Components
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 30px;
`;

const NameAndDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;
    height: 90%;
    margin-inline-start: 1rem;

    & label {
        color: white;
    }
`;
