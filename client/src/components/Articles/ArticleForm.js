import React from "react";
import "../../assets/css/ArticleForm.css";

const ArticleForm = (props) => {
    const cancelHandler = (event) => {
        event.preventDefault();
        props.onArticleReturn(null);
    };

    const postHandler = (event) => {
        event.preventDefault();
        const article = {};
        props.onArticleReturn(article);
    };

    return (
        <div className="article-form">
            <textarea placeholder="Nội dung bài đăng" />
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
                    type="button"
                    className="btn btn-success"
                    onClick={postHandler}>
                    Đăng
                </button>
            </div>
        </div>
    );
};

export default ArticleForm;
