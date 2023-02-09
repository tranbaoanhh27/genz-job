import React, { useContext } from "react";
import MyCard from "../../UI/MyCard";
import ArticleAuthor from "../ArticleAuthor";
import ArticleMediaContent from "../ArticleMediaContent/ArticleMediaContent";
import ArticleLikeCommentShareReport from "../Button/ArticleLikeCommentShareReport";
import ArticleEditDelete from "../Button/ArticleEditDelete";

import css from "./Article.module.css";
import ArticleContext from "../../../contexts/article-context";

const Article = (props) => {
    const articleContext = useContext(ArticleContext);

    const onEditTextContent = () => {};

    return (
        <MyCard className={css.card}>
            <div className="row justify-content-between">
                <ArticleAuthor
                    className="col-md-auto"
                    authorName={props.article.authorName}
                    avatarURL={props.article.avatarURL}
                    createDate={props.article.createDate}
                />
                {articleContext.filterMode === "allPosts" && (
                    <div className="col-sm-auto">
                        <button className={css["danger-button"]}>Bỏ theo dõi</button>
                    </div>
                )}
            </div>
            <div className="row" style={{ marginTop: "1rem" }}>
                {articleContext.filterMode === "allPosts" && (
                    <p style={{ textAlign: "start", color: "white" }}>{props.article.textContent}</p>
                )}
                {articleContext.filterMode === "myPosts" && (
                    <textarea
                        style={{
                            textAlign: "start",
                            background: "#3b3c3d",
                            color: "white",
                            borderRadius: "15px",
                        }}
                        value={props.article.textContent}
                        onChange={onEditTextContent}
                    />
                )}
            </div>
            <div className="row" style={{ marginTop: "0.5rem" }}>
                <ArticleMediaContent contentURL={props.article.mediaContentURL} />
            </div>
            {articleContext.filterMode === "allPosts" && (
                <ArticleLikeCommentShareReport numLikes={props.article.numLikes} />
            )}
            {articleContext.filterMode === "myPosts" && <ArticleEditDelete />}
        </MyCard>
    );
};

export default Article;
