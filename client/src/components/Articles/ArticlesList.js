import React from "react";
import Article from "./Article";

const ArticlesList = (props) => {
    /*
        props = {
            articles = []
        }
    */
    let sortedList = [...props.articles];

    if (props.sortMode === "byTime") {
        sortedList = sortedList.sort(
            (firstArticle, secondArticle) =>
                secondArticle.createDate - firstArticle.createDate
        );
    } else if (props.sortMode === "byLikes") {
        sortedList = sortedList.sort(
            (firstArticle, secondArticle) =>
                secondArticle.numLikes - firstArticle.numLikes
        );
    }

    return (
        <div>
            {sortedList.map((article) => (
                <Article
                    key={article.id}
                    article={article}
                    mode={props.filter}
                />
            ))}
        </div>
    );
};

export default ArticlesList;
