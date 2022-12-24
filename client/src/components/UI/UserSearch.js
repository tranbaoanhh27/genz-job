import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const UserSearch = (props) => {

    const [keywordInput, setKeywordInput] = useState("");
    let navigate = useNavigate();

    const search = () => {
        console.log("Keyword by search: " + keywordInput);
        navigate("/s?search="+keywordInput);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search();
        }
    }

    return (
        <div className="d-flex">
            <input
                className="form-control me-2"
                type="text"
                placeholder="Tìm kiếm người dùng..."
                value={keywordInput}
                style={{ background: props.theme.input, color: props.theme.text, border: "0px" }}
                onChange={e => setKeywordInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="btn btn-success" style={{ width: "130px" }} onClick={search}>
                Tìm kiếm
            </button>
        </div>
    );
};

export default UserSearch;
