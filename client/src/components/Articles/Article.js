import React from "react";
import MyCard from "../UI/MyCard";
import ArticleAuthor from "./ArticleAuthor";
import ArticleMediaContent from "./ArticleMediaContent";
import ArticleLikeCommentShareReport from "./ArticleLikeCommentShareReport";
import ArticleEditDelete from "./ArticleEditDelete";

const Article = (props) => {
    /*
        props = {
            article = {
                id: string
                avatarURL: string
                authorName: string
                createDate: Date
                textContent: string
                mediaContentURL: string
                numLikes: number
            }
            mode: "myPosts" or "allPosts"
        }
    */
    console.log(props.article);

    const onEditTextContent = (event) => {
        console.log(event.target.value);
    };

    return (
        <MyCard style={{ marginBottom: "2rem", background: "#242526" }}>
            <div
                className="row justify-content-between"
                style={{ width: "41rem", height: "50px" }}>
                <ArticleAuthor
                    className="col-md-auto"
                    authorName={props.article.authorName}
                    avatarURL={props.article.avatarURL}
                    createDate={props.article.createDate}
                />
                {props.mode === "allPosts" && (
                    <div className="col-sm-auto">
                        <button
                            className="btn btn-danger"
                            style={{ borderRadius: "30px" }}>
                            Bỏ theo dõi
                        </button>
                    </div>
                )}
            </div>
            <div className="row" style={{ marginTop: "1rem" }}>
                {props.mode === "allPosts" && (
                    <p style={{ textAlign: "start", color: "white" }}>
                        {props.article.textContent}
                    </p>
                )}
                {props.mode === "myPosts" && (
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
                <ArticleMediaContent
                    contentURL={props.article.mediaContentURL}
                />
            </div>
            {props.mode === "allPosts" && <ArticleLikeCommentShareReport numLikes={props.article.numLikes}/>}
            {props.mode === "myPosts" && <ArticleEditDelete />}
        </MyCard>
    );
};

export default Article;
