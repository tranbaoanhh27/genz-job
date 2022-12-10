import React from "react";
import "./ArticlesFilter.css";

const ArticlesFilter = (props) => {
    /*
        props = {
            filterMode: "myPosts" or "allPosts"
            sortMode: "byTime" or "byNewActivities"
            onSelectFilter: a function
            onSelectSortMode: a function
        }
    */
    const filterSelectHandler = (event) => {
        props.onSelectFilter(event.target.value);
    };

    const sortModeSelectHandler = (event) => {
        props.onSelectSortMode(event.target.value);
    };

    return (
        <div className="articles-filter">
            <select
                className="btn"
                value={props.filterMode}
                onChange={filterSelectHandler}>
                <option value="allPosts">Tất cả bài viết</option>
                <option value="myPosts">Bài viết của tôi</option>
            </select>
            <select
                className="btn"
                value={props.sortMode}
                onChange={sortModeSelectHandler}>
                <option value="byTime">Sắp xếp theo thời gian</option>
                <option value="byNewActivities">
                    Sắp xếp theo hoạt động mới
                </option>
            </select>
        </div>
    );
};

export default ArticlesFilter;
