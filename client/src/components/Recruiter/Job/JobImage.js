import React from "react";

const RecruiterJobImage = (props) => {
    return (
        <div
            className={`${props.className}`}
            style={{ display: "flex", flexDirection: "column" }}>
            <img
                src={props.imageUrl}
                style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            />
            <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: "0.5rem", borderRadius: "15px" }}>
                Thay đổi ảnh
            </button>
        </div>
    );
};

export default RecruiterJobImage;
