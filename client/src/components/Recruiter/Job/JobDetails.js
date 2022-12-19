import React from "react";
import MyCard from "../../UI/MyCard";
import RecruiterJobImage from "./JobImage";
import RecruiterJobInfo from "./JobInfo";

const RecruiterJobDetails = (props) => {
    /*
        props = {
            job = {
                id: string
                title: string
                company: string
                description: string
                createdDate: Date
                imageUrl: string
            }
        }
    */
    return (
        <MyCard
            style={{
                background: "#242526",
                width: "100%",
                height: "100%",
                margin: "auto",
            }}>
            <div className="row">
                <RecruiterJobImage
                    className="col-2"
                    imageUrl={props.job.imageUrl}
                />
                <RecruiterJobInfo className="col" job={props.job} />
            </div>
            <div
                style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                        marginInlineEnd: "2rem",
                        borderRadius: "15px",
                        paddingInline: "2rem",
                    }}>
                    Xóa tin tuyển dụng này
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    style={{ borderRadius: "15px", paddingInline: "2rem" }}>
                    Lưu các chỉnh sửa
                </button>
            </div>
            <div
                style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <label>Danh sách đơn ứng tuyển</label>
                    <a href="https://google.com">Các ứng viên tiềm năng</a>
                </div>
            <div className="row"></div>
        </MyCard>
    );
};

export default RecruiterJobDetails;
