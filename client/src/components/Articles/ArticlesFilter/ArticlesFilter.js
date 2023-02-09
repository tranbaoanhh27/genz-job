import React, { useContext } from "react";
import ArticleContext from "../../../contexts/article-context";

import css from "./ArticlesFilter.module.css";

const ArticlesFilter = (props) => {
    const articleContext = useContext(ArticleContext);
    const filterSelectHandler = (event) => articleContext.selectFilter(event.target.value);
    const sortModeSelectHandler = (event) => articleContext.selectSortMode(event.target.value);

    return (
        <div className={css.container}>
            <select className="btn" value={articleContext.filterMode} onChange={filterSelectHandler}>
                <option value="allPosts">Tất cả bài viết</option>
                <option value="myPosts">Bài viết của tôi</option>
            </select>
            <select className="btn" value={articleContext.sortMode} onChange={sortModeSelectHandler}>
                <option value="byTime">Sắp xếp theo thời gian</option>
                <option value="byLikes">Sắp xếp theo số lượt thích</option>
            </select>
        </div>
    );
};

export default ArticlesFilter;
