import axios from "axios";
import React, { useState } from "react";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesList from "./ArticlesList";

const Articles = (props) => {
    const [filterMode, setFilterMode] = useState("allPosts"); // allPosts or myPosts
    const [sortMode, setSortMode] = useState("byTime"); // byTime or byLikes

    const selectFilter = (filterMode) => {
        if (filterMode === "myPosts") {
            props.onSelectMyPostsFilter();
        } else {
            props.onSelectAllPostsFilter();
        }
        setFilterMode(filterMode);
        console.log(filterMode);
    };

    const selectSortMode = (sortMode) => {
        setSortMode(sortMode);
        console.log(sortMode);
    };

    return (
        <div style={{ marginTop: "3rem" }}>
            <ArticlesFilter
                filterMode={filterMode}
                sortMode={sortMode}
                onSelectFilter={selectFilter}
                onSelectSortMode={selectSortMode}
            />
            <ArticlesList
                articles={props.articles}
                filter={filterMode}
                sortMode={sortMode}
            />
        </div>
    );
};

export default Articles;
