import React from "react";
import styled from "styled-components";

const ArticlesFilter = (props) => {
    /*
        props = {
            filterMode: "myPosts" or "allPosts"
            sortMode: "byTime" or "byLikes"
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
        <FiltersContainer>
            <select className="btn" value={props.filterMode} onChange={filterSelectHandler}>
                <option value="allPosts">Tất cả bài viết</option>
                <option value="myPosts">Bài viết của tôi</option>
            </select>
            <select className="btn" value={props.sortMode} onChange={sortModeSelectHandler}>
                <option value="byTime">Sắp xếp theo thời gian</option>
                <option value="byLikes">Sắp xếp theo số lượt thích</option>
            </select>
        </FiltersContainer>
    );
};

export default ArticlesFilter;

// Styled Components
const FiltersContainer = styled.div`
    display: flex;
    margin: 1rem auto;
    width: 46rem;
    justify-content: space-between;

    & select {
        background: #242526 !important;
        border-radius: 15px;
        padding-inline: 1rem;
        color: white !important;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
        text-align: center;
    }
`;
