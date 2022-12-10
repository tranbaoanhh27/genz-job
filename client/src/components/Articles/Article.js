import React from "react";
import Card from "../UI/Card";
import "./Article.css";
import ArticleAuthor from "./ArticleAuthor";

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
            }
        }
    */
    return (
        <Card>
            <div
                className="row justify-content-between"
                style={{ width: "41rem", height: "50px" }}>
                <ArticleAuthor
                    className="col-md-auto"
                    authorName={props.article.authorName}
                    avatarURL={props.article.avatarURL}
                    createDate={props.article.createDate}
                />
                <div className="col-sm-auto">
                    <button className="btn btn-danger">Bỏ theo dõi</button>
                </div>
            </div>
        </Card>
    );
};

export default Article;
