import React, { useState } from "react";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesList from "./ArticlesList";

const SAMPLE_ARTICLES = [
    {
        id: 'article#1',
        authorName: "Trần Bảo Anh",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272918650_2805541046410689_2594639343722629898_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nxOb3Ki_HwYAX88Mqtp&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfDWt8VQkZ6AZxuektaUhnIBkQbbgyVsZbk99eocFRa4LQ&oe=6398C5BA",
        textContent: "Hello My name is Bao Anh",
        mediaContentURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: 'article#2',
        authorName: "Lê Quang Trí",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/305020521_2195239943974929_5702396522701865962_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hMFlAJkvR8UAX_88cP3&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfD28X9tP-zFZgOirnwZz_HSqH2TanrIcJVvqwz7ZAP9yw&oe=639826C1",
        textContent: "Hello My name is Tri Le",
        mediaContentURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
    },
    {
        id: 'article#3',
        authorName: "Thế Anh",
        createDate: new Date("2022-12-10"),
        avatarURL: "https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/316820234_3440410492901939_7769480717091937590_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9Uxzpf15RiwAX9Jwpgm&tn=YoHBE6-FV3qeguBs&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAVesMDNfi5o2brjrLZdYu0kxQVUgbrzsbv8rrx4N-I_g&oe=63985789",
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
