import React, { useState } from "react";
import ArticleForm from "./ArticleForm";
import styled from "styled-components";
import MyCard from "../UI/MyCard";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";

// Default Component
const NewArticle = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const startEditHandler = (event) => {
        event.preventDefault();
        setIsEditting(true);
    };

    const articleFormReturnHandler = (enteredArticle) => {
        // Create body for API post request
        const body = {
            ...enteredArticle,
            authorId: props.userId,
        };

        // Send POST request to create new article
        axios.post(API_BASE_URL + "/article/create", body).then((response) => {
            if (response.status == 200) {
                // If request executed successfully, update the article list
                props.onPostNewArticle();
            }
        });

        setIsEditting(false);
    };

    let component = (
        <div>
            <StartArticleButton type="button" onClick={startEditHandler}>
                Bài viết mới
            </StartArticleButton>
            <AttachmentButtons>
                <PrimaryButton onClick={startEditHandler}>Thêm ảnh</PrimaryButton>
                <PrimaryButton onClick={startEditHandler}>Thêm video</PrimaryButton>
                <PrimaryButton onClick={startEditHandler}>Thêm tệp âm thanh</PrimaryButton>
            </AttachmentButtons>
        </div>
    );

    if (isEditting) {
        component = <ArticleForm onArticleReturn={articleFormReturnHandler} />;
    }

    return <MyCard style={{ background: "#242526" }}>{component}</MyCard>;
};

export default NewArticle;

// Styled Components
const StartArticleButton = styled.button`
    background-color: #3b3c3d;
    color: white;
    padding: 1rem;
    margin: 1rem auto;
    width: 40rem;
    border-radius: 12px;
    text-align: start;
    border: 0px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const AttachmentButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;

    & button {
        border-radius: 30px;
        padding-inline: 2rem;
    }
`;

// Reusable Components
const PrimaryButton = (props) => {
    return (
        <button className="btn btn-primary" type="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};