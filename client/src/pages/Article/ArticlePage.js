import React, { useContext } from "react";
import Articles from "../../components/Articles/Articles";
import NewArticle from "../../components/Articles/NewArticle/NewArticle";
import Loader from "../../components/UI/Loader";

import css from "./ArticlePage.module.css";
import ArticleContext, { ArticleContextProvider } from "../../contexts/article-context";

const ArticlePage = () => {
    const articleContext = useContext(ArticleContext);
    return (
        <ArticleContextProvider>
            <NewArticle />
            {articleContext.isGettingArticles && (
                <div className={css.loaderContainer}>
                    <Loader size="100px" />
                </div>
            )}
            {!articleContext.isGettingArticles && <Articles />}
        </ArticleContextProvider>
    );
};

export default ArticlePage;
