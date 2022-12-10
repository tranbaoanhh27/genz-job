import React from "react";
import './ArticleButtons.css'

const ArticleLikeCommentShareReport = (props) => {
    return(
        <div className={`article-buttons ${props.className}`}>
            <button className="btn btn-secondary">Thích</button>
            <button className="btn btn-secondary">Bình luận</button>
            <button className="btn btn-secondary">Chia sẻ</button>
            <button className="btn btn-danger">Báo cáo</button>
        </div>
    );
}

export default ArticleLikeCommentShareReport;