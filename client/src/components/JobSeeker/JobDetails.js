import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LOGO_URL =
    "https://raw.githubusercontent.com/theanhbr01/CSC13002/0ff1c72d43a53cfae8dad2d5c9e9ae70dcc1634f/client/src/assets/images/logo.svg";

const JOB_DESCRIPTION_SAMPLE =
    "Review business requirements working with team members\nPerform a technical analysis of requirements\nProduce a solid, detailed technical design\nWrite clean, modular, robust code to implement the desired requirements with little or no supervision\nWork with the other partners to triage and fix bugs with rapid turnaround\nContribute ideas for making the application better and easier to use\nDevelop and maintain mobile application using Android, React Native or Flutter framework\nActive participation in customer/partner design meetings and general engagements\nEnsure on time, on budget, and the quality of the product.\nReview business requirements working with team members\nPerform a technical analysis of requirements\nProduce a solid, detailed technical design\nWrite clean, modular, robust code to implement the desired requirements with little or no supervision\nWork with the other partners to triage and fix bugs with rapid turnaround\nContribute ideas for making the application better and easier to use\nDevelop and maintain mobile application using Android, React Native or Flutter framework\nActive participation in customer/partner design meetings and general engagements\nEnsure on time, on budget, and the quality of the product.";

const statusBadge = {
    open: "badge-success",
    closed: "badge-danger",
};

const statusLabel = {
    open: "Đang tuyển",
    closed: "Đã đóng",
};

function JobInfo() {
    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center fw-bold">Chi tiết công việc</h3>
            </div>
            <div
                className="row"
                style={{ border: "1px solid gray", borderRadius: "5px", padding: "10px", background: "#e3f2fe51" }}>
                <div className="row">
                    <img className="col-3" src={LOGO_URL} width="100" height="100"></img>
                    <div className="col">
                        <div className="row">
                            <label className="col-3">Trạng thái:</label>
                            <span
                                className="col badge badge-success"
                                style={{ maxWidth: "80px", maxHeight: "20px", borderRadius: "15px" }}>
                                Đang tuyển
                            </span>
                        </div>
                        <div className="row">
                            <label className="col-3">Tên công việc:</label>
                            <label
                                className="col"
                                style={{ border: "1px solid gray", borderRadius: "5px", background: "#ffffff" }}>
                                Thực tập Android Developer (Java/Kotlin)
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-3">Địa chỉ:</label>
                            <label
                                className="col"
                                style={{ border: "1px solid gray", borderRadius: "5px", background: "#ffffff" }}>
                                12/21 Ngô Văn Khoai, Phường 2, Quận 6, TP.HCM
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-3">Công ty:</label>
                            <label
                                className="col"
                                style={{ border: "1px solid gray", borderRadius: "5px", background: "#ffffff" }}>
                                Vip Technology - Chi nhánh Hồ Chí Minh
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label className="col-3">Một số thông tin:</label>
                    <label
                        className="col"
                        style={{ border: "1px solid gray", borderRadius: "5px", background: "#ffffff" }}>
                        Thông tin là thông tin gì nhỉ?
                    </label>
                </div>
                <div className="row">
                    <label className="col-3">Mô tả công việc:</label>
                    <text
                        className="col"
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            height: "200px",
                            overflowY: "scroll",
                            background: "#ffffff",
                        }}>
                        {JOB_DESCRIPTION_SAMPLE}
                    </text>
                </div>
                <div className="row" style={{ padding: "10px" }}>
                    <label className="col-3">Đánh giá:</label>
                    <textarea
                        className="col"
                        style={{ height: "150px", maxHeight: "150px" }}
                        placeholder="Write job review here."></textarea>
                </div>
            </div>
        </div>
    );
}

function JobListGroupItem(props) {
    const [title, setTitle] = useState(props.jobTitle);
    const [date, setDate] = useState(props.createdDate);
    const [status, setStatus] = useState(props.jobStatus);

    return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{title}</h5>
                <span
                    className={`badge ${statusBadge[status]}`}
                    style={{ borderRadius: "15px", maxHeight: "22px", paddingInline: "10px" }}>
                    {statusLabel[status]}
                </span>
            </div>
            <small>{`Ngày đăng: ${date}`}</small>
        </a>
    );
}

const sampleItemList = Array.from([
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="open" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="open" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="open" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="closed" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="open" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="closed" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="open" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="closed" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="open" />,
    <JobListGroupItem jobTitle="Xe ôm Grab Bike" createdDate="11/11/2011 11:11" jobStatus="closed" />,
]);

function JobListGroup(jobItems) {
    return <div className="list-group">{jobItems}</div>;
}

export default function JobseekerJobDetails() {
    const navigator = useNavigate();
    return (
        <div className="container-fluid row" style={{ backgroundColor: "#e3f2fe31", padding: "10px" }}>
            <div className="col-8 ms-4">
                <JobInfo />
            </div>
            <div className="col">
                <div className="row justify-content-end">
                    <button
                        className="btn btn-secondary"
                        style={{ width: "100px", marginInlineEnd: "10px" }}
                        onClick={() => navigator(-1)}>
                        Quay lại
                    </button>
                </div>
                <div className="row mt-1">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-success">
                            Ứng tuyển ngay
                        </button>
                        <button type="button" className="btn btn-primary">
                            Chia sẽ
                        </button>
                    </div>
                </div>
                <label className="row text-start mt-1 ms-1">Có thể bạn cũng quan tâm</label>
                <div className="row" style={{ height: "450px", overflowY: "scroll" }}>
                    {JobListGroup(sampleItemList)}
                </div>
            </div>
        </div>
    );
}
