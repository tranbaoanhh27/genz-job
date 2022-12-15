import React, { useState } from "react";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesList from "./ArticlesList";

const SAMPLE_ARTICLES = [
    {
        id: 'article#1',
        authorName: "Trần Bảo Anh",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        textContent: "Hello My name is Bao Anh",
        mediaContentURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: 'article#2',
        authorName: "Lê Quang Trí",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        textContent: "Hello My name is Tri Le",
        mediaContentURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: 'article#3',
        authorName: "Thế Anh",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        textContent: "Hello My name is The Anh",
        mediaContentURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
]

const Articles = (props) => {
    const [filterMode, setFilterMode] = useState("allPosts"); // allPosts or myPosts
    const [sortMode, setSortMode] = useState("byTime"); // byTime or byNewActivities
    const [articles, setArticles] = useState(SAMPLE_ARTICLES);

    const selectFilter = (filterMode) => {
        setFilterMode(filterMode);
        console.log(filterMode);
    };

    const selectSortMode = (sortMode) => {
        setSortMode(sortMode);
        console.log(sortMode);
    };

    return (
        <div style={{marginTop: "3rem"}}>
            <ArticlesFilter
                filterMode={filterMode}
                sortMode={sortMode}
                onSelectFilter={selectFilter}
                onSelectSortMode={selectSortMode}
            />
            <ArticlesList articles={articles} filter={filterMode}/>
        </div>
    );
};

export default Articles;
