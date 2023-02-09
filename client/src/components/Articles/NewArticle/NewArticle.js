import React, { useState } from "react";
import ArticleForm from "../ArticleForm/ArticleForm";
import MyCard from "../../UI/MyCard";

import css from "./NewArticle.module.css";

const NewArticle = () => {
    const [isEditting, setIsEditting] = useState(false);
    const startEditHandler = () => setIsEditting(true);
    const cancelEditHandler = () => setIsEditting(false);

    let component = (
        <div className={css.container}>
            <button className={css["start-button"]} type="button" onClick={startEditHandler}>
                Bài viết mới
            </button>
            <div className={css["attachments"]}>
                <button onClick={startEditHandler}>Thêm ảnh</button>
                <button onClick={startEditHandler}>Thêm video</button>
                <button onClick={startEditHandler}>Thêm tệp âm thanh</button>
            </div>
        </div>
    );

    if (isEditting) {
        component = <ArticleForm onCancel={cancelEditHandler} />;
    }

    return <MyCard className={css.card}>{component}</MyCard>;
};

export default NewArticle;
