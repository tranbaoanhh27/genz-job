import React, { useState } from "react";
import "../../assets/css/NewArticle.css";
import ArticleForm from "./ArticleForm";
import MyCard from "../UI/MyCard";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";

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
            <button
                type="button"
                className="new-article__start-article"
                onClick={startEditHandler}>
                Bài viết mới
            </button>
            <div className="new-article__add-attachments">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={startEditHandler}>
                    Thêm ảnh
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={startEditHandler}>
                    Thêm video
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={startEditHandler}>
                    Thêm tệp âm thanh
                </button>
            </div>
        </div>
    );

    if (isEditting) {
        component = <ArticleForm onArticleReturn={articleFormReturnHandler} />;
    }

    return <MyCard style={{ background: "#242526" }}>{component}</MyCard>;
};

export default NewArticle;
