import React from "react";

const recruiterJobInfoInputStyle = {
    background: "#3a3b3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
};

const RecruiterJobInfo = (props) => {
    return (
        <div
            className={`${props.className}`}
            style={{ display: "flex", flexDirection: "column" }}>
            <div className="row">
                <label className="col-3" style={{ textAlign: "start" }}>
                    Tiêu đề:
                </label>
                <input
                    className="col"
                    type="text"
                    value={props.job.title}
                    style={recruiterJobInfoInputStyle}
                />
            </div>
            <div className="row" style={{ marginTop: "0.5rem" }}>
                <label className="col-3" style={{ textAlign: "start" }}>
                    Công ty:
                </label>
                <input
                    className="col"
                    type="text"
                    value={props.job.company}
                    style={recruiterJobInfoInputStyle}
                />
            </div>
            <div className="row" style={{ marginTop: "0.5rem", flex: "1" }}>
                <label className="col-3" style={{ textAlign: "start" }}>
                    Mô tả công việc:
                </label>
                <textarea
                    className="col"
                    value={props.job.description}
                    style={recruiterJobInfoInputStyle}
                />
            </div>
        </div>
    );
};

export default RecruiterJobInfo;
