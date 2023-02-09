import React, { useContext } from "react";
import ArticleContext from "../../contexts/article-context";
import Article from "./Article/Article";

const ArticlesList = (props) => {
    const articleContext = useContext(ArticleContext);

    let sortedList = [];
    if (articleContext.articles) sortedList = [...articleContext.articles];

    if (articleContext.sortMode === "byTime") {
        sortedList = sortedList.sort(
            (firstArticle, secondArticle) => secondArticle.createDate - firstArticle.createDate
        );
    } else if (articleContext.sortMode === "byLikes") {
        sortedList = sortedList.sort((firstArticle, secondArticle) => secondArticle.numLikes - firstArticle.numLikes);
    }

    return (
        <div>
            {sortedList.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticlesList;
