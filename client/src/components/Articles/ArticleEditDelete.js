import React from "react";
import '../../assets/css/ArticleButtons.css'

const ArticleEditDelete = (props) => {
    return(
        <div className={`article-buttons ${props.className}`}>
            <button className="btn btn-secondary">Lưu các chỉnh sửa</button>
            <button className="btn btn-danger">Xóa bài viết</button>
        </div>
    );
}

export default ArticleEditDelete;