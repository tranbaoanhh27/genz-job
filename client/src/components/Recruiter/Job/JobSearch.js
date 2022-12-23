import React from "react";
import { useState } from "react";

const RecruiterJobSearch = (props) => {
    const [enteredKeyword, setEnteredKeyword] = useState("");
    const [isFiltered, setIsFiltered] = useState(false);

    const confirmKeyword = () => {
        props.onChangeKeyword(enteredKeyword);
        setIsFiltered(true);
    };

    const resetKeyword = () => {
        setEnteredKeyword("");
        props.onChangeKeyword("");
        setIsFiltered(false);
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm theo tiêu đề..."
                value={enteredKeyword}
                onChange={(event) => setEnteredKeyword(event.target.value)}
                aria-label="jobTitleKeyword"
                aria-describedby="button-search-job"
                style={{
                    background: "#3a3b3c",
                    color: "white",
                    border: "none",
                }}
            />
            {!isFiltered && (
                <button
                    className="btn"
                    type="button"
                    id="button-search-job"
                    onClick={confirmKeyword}
                    style={{ background: "#242526", color: "white" }}>
                    Tìm kiếm
                </button>
            )}
            {isFiltered && (
                <button
                    className="btn"
                    type="button"
                    id="button-search-job"
                    onClick={resetKeyword}
                    style={{ background: "#242526", color: "white" }}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default RecruiterJobSearch;
