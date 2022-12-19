import React from "react";

const RecruiterJobSearch = (props) => {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm theo tiêu đề..."
                aria-label="jobTitleKeyword"
                aria-describedby="button-search-job"
                style={{
                    background: "#3a3b3c",
                    color: "white",
                    border: "none",
                }}
            />
            <button
                className="btn"
                type="button"
                id="button-search-job"
                style={{ background: "#242526", color: "white" }}>
                Tìm kiếm
            </button>
        </div>
    );
};

export default RecruiterJobSearch;
