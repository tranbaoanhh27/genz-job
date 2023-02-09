import React, { useContext, useState } from "react";
import AppContext from "../../../contexts/app-context";
import ArticleContext from "../../../contexts/article-context";

import css from "./ArticleForm.module.css";

const ArticleForm = (props) => {
    const [textContent, setTextContent] = useState("");
    const appContext = useContext(AppContext);
    const articleContext = useContext(ArticleContext);

    const textContentChangeHandler = (event) => setTextContent(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
        const article = {
            content: textContent,
            media: "",
        };
        articleContext.createArticle(article);
        props.onCancel();
    };

    return (
        <form className={css.form} onSubmit={submitHandler}>
            <textarea id="newArticleTextContent" placeholder="Nội dung bài đăng" onChange={textContentChangeHandler} />
            <div className={css.attachments}>
                <button>Thêm ảnh</button>
                <button>Thêm video</button>
                <button>Thêm tệp âm thanh</button>
            </div>
            <div className={css.submit}>
                <button type="button" className={css.cancel} onClick={props.onCancel}>
                    Hủy bỏ
                </button>

                <button type="submit" className={css.confirm} disabled={!appContext.user}>
                    Đăng
                </button>
            </div>
        </form>
    );
};

export default ArticleForm;
