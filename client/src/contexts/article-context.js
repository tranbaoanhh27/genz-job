import React, { useContext, useState, useEffect, useCallback } from "react";
import useFetch from "../hooks/use-fetch";
import AppContext from "./app-context";
import { API_BASE_URL } from "../Data/apiConstants";

const ArticleContext = React.createContext({
    articles: [],
    isGettingArticles: false,
    isPostingArticle: false,
    showMyPosts: () => {},
    showAllPosts: () => {},
    createArticle: (article) => {},
    filterMode: "",
    selectFilter: (mode) => {},
    sortMode: "",
    selectSortMode: (mode) => {},
});

export default ArticleContext;

export const ArticleContextProvider = (props) => {
    const appContext = useContext(AppContext);

    const userId = appContext.user ? appContext.user.id : undefined;

    const USER_ARTICLES_URL = API_BASE_URL + "/article?userId=" + userId;
    const ALL_ARTICLES_URL = API_BASE_URL + "/article";

    const [articles, setArticles] = useState([]);
    const [dataEndpoint, setDataEndPoint] = useState(ALL_ARTICLES_URL);
    const [filterMode, setFilterMode] = useState("allPosts"); // allPosts or myPosts
    const [sortMode, setSortMode] = useState("byTime"); // byTime or byLikes
    const [getArticleError, isGettingArticles, doGetArticles] = useFetch();
    const [postArticleError, isPostingArticle, doPostArticle] = useFetch();

    const showMyPosts = useCallback(() => setDataEndPoint(USER_ARTICLES_URL), [USER_ARTICLES_URL]);
    const showAllPosts = useCallback(() => setDataEndPoint(ALL_ARTICLES_URL), [ALL_ARTICLES_URL]);

    const getArticles = useCallback(async () => {
        if (!userId && filterMode === "myPosts") {
            setArticles([]);
            return;
        }
        const data = await doGetArticles(dataEndpoint);
        const convertedArticles = data.articles.map((article) => convertResponseArticle(article));
        setArticles(convertedArticles);
    }, [doGetArticles, dataEndpoint, userId, filterMode]);

    const createArticle = useCallback(
        async (enteredArticle) => {
            // Create body for API post request
            const requestBody = {
                ...enteredArticle,
                authorId: userId,
            };

            // just a trick to reload all post
            setDataEndPoint("");

            // Send POST request to create new article
            await doPostArticle(API_BASE_URL + "/article/create", {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            showAllPosts();
        },
        [userId, doPostArticle, showAllPosts]
    );

    const selectFilter = useCallback(
        (filterMode) => {
            setFilterMode(filterMode);
            if (filterMode === "myPosts") showMyPosts();
            else showAllPosts();
        },
        [showAllPosts, showMyPosts]
    );

    // Side-effect when articles data endpoint changes
    // call API to reload articles data from server
    useEffect(() => {
        if (dataEndpoint !== "") getArticles();
    }, [dataEndpoint, getArticles]);

    useEffect(() => {
        if (getArticleError) alert(getArticleError);
        if (postArticleError) alert(postArticleError);
    }, [getArticleError, postArticleError]);

    return (
        <ArticleContext.Provider
            value={{
                articles: articles,
                isGettingArticles: isGettingArticles,
                isPostingArticle: isPostingArticle,
                showMyPosts: showMyPosts,
                showAllPosts: showAllPosts,
                createArticle: createArticle,
                filterMode: filterMode,
                selectFilter: selectFilter,
                sortMode: sortMode,
                selectSortMode: setSortMode,
            }}>
            {props.children}
        </ArticleContext.Provider>
    );
};

const convertResponseArticle = (responseArticle) => {
    return {
        id: responseArticle.id,
        authorName: responseArticle.User.UserName,
        createDate: new Date(responseArticle.datePosted),
        updateDate: new Date(responseArticle.updatedAt),
        avatarURL: responseArticle.avatarURL,
        textContent: responseArticle.content,
        mediaContentURL: responseArticle.media,
        numLikes: Math.floor(Math.random() * 100), // just for test
    };
};
