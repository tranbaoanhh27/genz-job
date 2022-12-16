import React, { useState } from "react";
import styled from "styled-components";

const ArticleForm = (props) => {
    const [textContent, setTextContent] = useState("");

    const textContentChangeHandler = (event) => {
        event.preventDefault();
        setTextContent(event.target.value);
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onArticleReturn(null);
    };

    const postHandler = (event) => {
        event.preventDefault();
        const article = {
            content: textContent,
            media: "none",
        };
        props.onArticleReturn(article);
    };

    return (
        <Form onSubmit={postHandler}>
            <textarea id="newArticleTextContent" placeholder="Nội dung bài đăng" onChange={textContentChangeHandler} />
            <AttachmentButtons>
                <PrimaryButton>Thêm ảnh</PrimaryButton>
                <PrimaryButton>Thêm video</PrimaryButton>
                <PrimaryButton>Thêm tệp âm thanh</PrimaryButton>
            </AttachmentButtons>
            <SubmitButtons>
                <button type="button" className="btn btn-danger" onClick={cancelHandler}>
                    Hủy bỏ
                </button>
                <button type="submit" className="btn btn-success">
                    Đăng
                </button>
            </SubmitButtons>
        </Form>
    );
};

export default ArticleForm;

// Styled Components
const Form = styled.form`
    padding-top: 1rem;

    & textarea {
        padding: 1rem;
        border-radius: 15px;
        width: 40rem;
        background: #3a3b3c;
        color: white;
    }
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

const SubmitButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    & button {
        border-radius: 30px;
        padding-inline: 2rem;
        margin-inline-start: 1rem;
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
