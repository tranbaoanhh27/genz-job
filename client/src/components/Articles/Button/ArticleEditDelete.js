import React from "react";
import css from "./ArticleButtons.module.css";

const ArticleEditDelete = (props) => {
    return (
        <div className={`${css["article-buttons"]} ${props.className}`}>
            <button>Lưu các chỉnh sửa</button>
            <button className={css["danger-button"]}>Xóa bài viết</button>
        </div>
    );
};

export default ArticleEditDelete;
