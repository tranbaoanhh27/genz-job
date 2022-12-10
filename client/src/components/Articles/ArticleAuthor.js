import React from "react";
import './ArticleAuthor.css'

const ArticleAuthor = (props) => {
    // props = { authorName, createDate, avatarURL }
    return (
        <div className={`row ${props.className}`}>
            <div className="col-sm-auto">
                <img className="article-avatar" src={props.avatarURL}/>
            </div>
            <div className="col-md-auto article-author-name-date">
                <label className="row">{props.authorName}</label>
                <label className="row">{props.createDate.toLocaleString("vi-VN")}</label>
            </div>
        </div>
    );
};

export default ArticleAuthor;
