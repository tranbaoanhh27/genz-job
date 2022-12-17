import React from "react";

const RecruiterJobListItem = (props) => {
    /*
        props = {
            jobTitle: string
            jobCreatedDate: Date
        }
    */
    const clickHandler = (event) => {
        event.preventDefault();
        props.onItemClick(props.jobId);
    }
    return (
        <div
            className="list-group-item list-group-item-action"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                background: props.isActive === true ? "#0d6efd" : "#242526",
                color: "white"
            }}
            onClick={clickHandler}>
            <h5>{props.jobTitle}</h5>
            <p>{props.jobCreatedDate.toLocaleString("vi-VN")}</p>
        </div>
    );
};

export default RecruiterJobListItem;
