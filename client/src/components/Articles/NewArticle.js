import React, { useState } from "react";
import "../../assets/css/NewArticle.css";
import ArticleForm from "./ArticleForm";
import MyCard from "../UI/MyCard";

const NewArticle = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const startEditHandler = (event) => {
        event.preventDefault();
        setIsEditting(true);
    };

    const articleFormReturnHandler = (enteredArticle) => {
        // TODO: POST the enteredArticle if it's not null
        setIsEditting(false);
    }

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
        component = <ArticleForm onArticleReturn={articleFormReturnHandler}/>;
    }

    return <MyCard style={{background: "#242526"}}>{component}</MyCard>;
};

export default NewArticle;
