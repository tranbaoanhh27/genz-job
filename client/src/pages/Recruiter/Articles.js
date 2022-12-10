import React from "react";
import Articles from "../../components/Articles/Articles";
import NewArticle from '../../components/Articles/NewArticle'

export default function RecruiterArticles() {
    return (
        <div style={{paddingTop: "5rem"}}>
            <NewArticle />
            <Articles />
        </div>
    );
}
