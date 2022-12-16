import React from "react";

const RecruiterJobFilter = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>Các tin đã tạo</label>
            <select
                value="sortByTitle"
                style={{
                    background: "#242526",
                    borderRadius: "15px",
                    border: "none",
                    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.25)",
                    color: "white",
                    paddingInline: "1rem",
                }}>
                <option value="sortByTitle">Sắp xếp theo tiêu đề</option>
                <option value="sortByDate">Sắp xếp theo ngày tạo</option>
            </select>
        </div>
    );
};

export default RecruiterJobFilter;
