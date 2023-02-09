import React from "react";
import css from "./ArticleMediaContent.module.css";

const ArticleMediaContent = (props) => {
    let contentUrl = "/assets/img/default_article_image.jpeg";
    if (props.contentURL.length > 0) contentUrl = props.contentURL;
    return (
        <div>
            <img src={contentUrl} className={css.image} alt="Article media content" />
        </div>
    );
};

export default ArticleMediaContent;
