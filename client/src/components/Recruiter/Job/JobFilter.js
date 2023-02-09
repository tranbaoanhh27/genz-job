import React, { useState } from "react";

const RecruiterJobFilter = (props) => {
    const [sortMode, setSortMode] = useState("sortByTitle");

    const changeFilter = (event) => {
        props.onChangeSortMode(event.target.value);
        setSortMode(event.target.value);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>Các tin đã tạo</label>
            <select
                value={sortMode}
                onChange={changeFilter}
                style={{
                    background: "#242526",
                    borderRadius: "15px",
                    border: "none",
                    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.25)",
                    color: "white",
                    paddingInline: "1rem",
                }}>
                <option value="sortByTitle">Sắp xếp theo tiêu đề</option>
                <option value="latestFirst">Mới nhất xếp trước</option>
                <option value="oldestFirst">Cũ nhất xếp trước</option>
            </select>
        </div>
    );
};

export default RecruiterJobFilter;
