import React, { useState } from "react";
import "../../assets/css/ArticleForm.css";

const ArticleForm = (props) => {
    const [textContent, setTextContent] = useState("");

    const textContentChangeHandler = (event) => {
        event.preventDefault();
        setTextContent(event.target.value);
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onArticleReturn(null);
    };

    const postHandler = (event) => {
        event.preventDefault();
        const article = {
            content: textContent,
            media: "none"
        };
        props.onArticleReturn(article);
    };

    return (
        <form className="article-form" onSubmit={postHandler}>
            <textarea id="newArticleTextContent" placeholder="Nội dung bài đăng" onChange={textContentChangeHandler}/>
            <div className="article-form__add-attachments-buttons-area">
                <button type="button" className="btn btn-primary">
                    Thêm ảnh
                </button>
                <button type="button" className="btn btn-primary">
                    Thêm video
                </button>
                <button type="button" className="btn btn-primary">
                    Thêm tệp âm thanh
                </button>
            </div>
            <div className="article-form__submit-buttons-area">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={cancelHandler}>
                    Hủy bỏ
                </button>
                <button
                    type="submit"
                    className="btn btn-success">
                    Đăng
                </button>
            </div>
        </form>
    );
};

export default ArticleForm;
