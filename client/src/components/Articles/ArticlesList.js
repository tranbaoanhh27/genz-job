import React from "react";
import Article from "./Article";

const ArticlesList = (props) => {
    /*
        props = {
            articles = []
        }
    */
    return(
        <div>
            {props.articles.map(article => <Article key={article.id} article={article}/>)}
        </div>
    );
}

export default ArticlesList;