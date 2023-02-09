import React from "react";
import css from "./ArticleButtons.module.css";

const ArticleLikeCommentShareReport = (props) => {
    return (
        <div className={`${css["article-buttons"]} ${props.className}`}>
            <button>{`Thích: ${props.numLikes}`}</button>
            <button>Bình luận</button>
            <button>Chia sẻ</button>
            <button className={css["danger-button"]}>Báo cáo</button>
        </div>
    );
};

export default ArticleLikeCommentShareReport;
