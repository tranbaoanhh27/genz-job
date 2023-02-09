import React from "react";
import ArticlesFilter from "./ArticlesFilter/ArticlesFilter";
import ArticlesList from "./ArticlesList";

const Articles = () => {
    return (
        <div style={{ marginTop: "3rem" }}>
            <ArticlesFilter />
            <ArticlesList />
        </div>
    );
};

export default Articles;
