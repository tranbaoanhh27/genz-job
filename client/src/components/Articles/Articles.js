import React, { useState } from "react";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesList from "./ArticlesList";

const SAMPLE_ARTICLES = [
    {
        id: 'article#1',
        authorName: "Trần Bảo Anh",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272918650_2805541046410689_2594639343722629898_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nxOb3Ki_HwYAX88Mqtp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfDWt8VQkZ6AZxuektaUhnIBkQbbgyVsZbk99eocFRa4LQ&oe=6398C5BA",
        textContent: "Hello World",
        mediaContentURL: ""
    }
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
        <div>
            <ArticlesFilter
                filterMode={filterMode}
                sortMode={sortMode}
                onSelectFilter={selectFilter}
                onSelectSortMode={selectSortMode}
            />
            <ArticlesList articles={articles}/>
        </div>
    );
};

export default Articles;
