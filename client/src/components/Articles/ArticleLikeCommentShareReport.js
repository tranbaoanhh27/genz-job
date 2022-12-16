import React from "react";
import '../../assets/css/ArticleButtons.css'

const ArticleLikeCommentShareReport = (props) => {
    return(
        <div className={`article-buttons ${props.className}`}>
            <button className="btn">{`Thích: ${props.numLikes}`}</button>
            <button className="btn">Bình luận</button>
            <button className="btn">Chia sẻ</button>
            <button className="btn btn-danger">Báo cáo</button>
        </div>
    );
}

export default ArticleLikeCommentShareReport;