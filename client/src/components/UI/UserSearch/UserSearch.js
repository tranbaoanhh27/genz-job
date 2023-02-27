import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from './UserSearch.module.css';

const UserSearch = () => {
    const [keywordInput, setKeywordInput] = useState("");
    let navigate = useNavigate();

    const search = () => {
        // console.log("Keyword by search: " + keywordInput);
        navigate("/s?search=" + keywordInput);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            search();
        }
    };

    return (
        <div className={css.container}>
            <input
                className={css.editText}
                type="text"
                placeholder="Tìm kiếm người dùng..."
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default UserSearch;
