import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchResultPage from "../../components/SearchResult/SearchResultPage";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResult() {
    let query = useQuery();
    let keywordInput = query.get("search");
    // console.log("Keyword input: " + keywordInput);

    return (
        <div>
            <Routes>
                <Route index element={<SearchResultPage keyword={keywordInput} />} />
                {/* <Route path="jobs" element={<RecruiterJobPage />} />
                <Route path="articles" element={<RecruiterArticles userId={props.userId}/>} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} /> */}
            </Routes>
        </div>
    );
}
