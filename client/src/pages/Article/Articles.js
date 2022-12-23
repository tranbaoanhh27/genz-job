import React, { useState } from "react";
import Articles from "../../components/Articles/Articles";
import NewArticle from "../../components/Articles/NewArticle";
import axios from "axios";
import { API_BASE_URL } from "../../Data/apiConstants";

const SAMPLE_ARTICLES = [
    {
        id: "article#1",
        authorName: "Trần Bảo Anh",
        createDate: new Date("2022-12-10"),
        avatarURL:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        textContent: "Hello My name is Bao Anh",
        numLikes: Math.floor(Math.random() * 100),
        mediaContentURL:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    },
    {
        id: "article#2",
        authorName: "Lê Quang Trí",
        createDate: new Date("2022-12-10"),
        avatarURL:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        textContent: "Hello My name is Tri Le",
        numLikes: Math.floor(Math.random() * 100),
        mediaContentURL:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    },
    {
        id: "article#3",
        authorName: "Thế Anh",
        createDate: new Date("2022-12-10"),
        avatarURL:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        textContent: "Hello My name is The Anh",
        numLikes: Math.floor(Math.random() * 100),
        mediaContentURL:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    },
];

export default function RecruiterArticles(props) {
    const [articles, setArticles] = useState(SAMPLE_ARTICLES);

    const showMyPosts = () => {
        // Get user's posts, then set articles
        axios
            .get(API_BASE_URL + "/article?userId=" + props.userId)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    // Set articles to response data articles
                    setArticles(
                        response.data.articles.map((responseArticle) => {
                            return {
                                id: responseArticle.id,
                                authorName: response.data.userName,
                                createDate: new Date(responseArticle.createdAt),
                                updateDate: new Date(responseArticle.updatedAt),
                                avatarURL: responseArticle.avatarURL,
                                textContent: responseArticle.content,
                                mediaContentURL: responseArticle.media,
                                numLikes: Math.floor(Math.random() * 100)   // just for test
                            };
                        })
                    );
                } else {
                    // TODO: show error message
                }
            });
    };

    const showAllPosts = () => {
        setArticles(SAMPLE_ARTICLES);
    };

    return (
        <div>
            <NewArticle userId={props.userId} onPostNewArticle={showMyPosts}/>
            <Articles
                articles={articles}
                onSelectMyPostsFilter={showMyPosts}
                onSelectAllPostsFilter={showAllPosts}
            />
        </div>
    );
}