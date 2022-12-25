import React, { useState } from "react";
import Articles from "../../components/Articles/Articles";
import NewArticle from "../../components/Articles/NewArticle";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";

export default function RecruiterArticles(props) {
    const [articles, setArticles] = useState(undefined);

    const getAll = getAllPost();
    getAll.then((res) => {
        if (articles === undefined)
            setArticles(
                res.data.articles.map((responseArticle) => {
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
                })
            );
    });

    const showMyPosts = () => {
        // Get user's posts, then set articles
        axios.get(API_BASE_URL + "/article?userId=" + props.userId).then((response) => {
            if (response.status === 200) {
                // Set articles to response data articles
                setArticles(
                    response.data.articles.map((responseArticle) => {
                        return {
                            id: responseArticle.id,
                            authorName: response.data.userName,
                            createDate: new Date(responseArticle.datePosted),
                            updateDate: new Date(responseArticle.updatedAt),
                            avatarURL: responseArticle.avatarURL,
                            textContent: responseArticle.content,
                            mediaContentURL: responseArticle.media,
                            numLikes: Math.floor(Math.random() * 100), // just for test
                        };
                    })
                );
            } else {
                // TODO: show error message
            }
        });
    };

    const showAllPosts = () => {
        // Just set it to undefined at it will autumatically call API to get all posts
        setArticles(undefined);
    };

    return (
        <div>
            <NewArticle userId={props.userId} onPostNewArticle={showMyPosts} />
            {articles && (
                <Articles
                    articles={articles}
                    onSelectMyPostsFilter={showMyPosts}
                    onSelectAllPostsFilter={showAllPosts}
                />
            )}
            {!articles && (
                <Articles
                    articles={[]}
                    onSelectMyPostsFilter={showMyPosts}
                    onSelectAllPostsFilter={showAllPosts}
                />
            )}
        </div>
    );
}

// Helper functions

/**
 * Function calling API to get all articles from server.
 * @returns {Promise} A Promise contains result of API call
 */
async function getAllPost() {
    let axiosPromise = await axios.get(API_BASE_URL + "/article");
    return axiosPromise;
}
