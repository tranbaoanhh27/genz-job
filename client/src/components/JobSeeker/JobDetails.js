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
        <div className="container-fluid">
            <div className="row">
                <h3 className="text-center fw-bold">Chi tiết công việc</h3>
            </div>
            <div
                className="row"
                style={{ borderRadius: "15px", paddingTop: "30px", paddingInline: "30px", background: "#e3f2feff" }}>
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
                                style={{
                                    border: "1px solid gray",
                                    borderRadius: "5px",
                                    background: "#ffffff",
                                    padding: "5px",
                                    paddingInline: "10px",
                                }}>
                                Thực tập Android Developer (Java/Kotlin)
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-3">Địa chỉ:</label>
                            <label
                                className="col"
                                style={{
                                    border: "1px solid gray",
                                    borderRadius: "5px",
                                    background: "#ffffff",
                                    padding: "5px",
                                    paddingInline: "10px",
                                }}>
                                12/21 Ngô Văn Khoai, Phường 2, Quận 6, TP.HCM
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-3">Công ty:</label>
                            <label
                                className="col"
                                style={{
                                    border: "1px solid gray",
                                    borderRadius: "5px",
                                    background: "#ffffff",
                                    padding: "5px",
                                    paddingInline: "10px",
                                }}>
                                Vip Technology - Chi nhánh Hồ Chí Minh
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label className="col-3">Một số thông tin:</label>
                    <label
                        className="col"
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            background: "#ffffff",
                            padding: "5px",
                            paddingInline: "10px",
                        }}>
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
                            height: "150px",
                            overflowY: "scroll",
                            background: "#ffffff",
                            padding: "5px",
                            paddingInline: "10px",
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
        <a
            href=""
            className="list-group-item list-group-item-action flex-column align-items-start"
            style={{ background: "#e3f2fe33" }}>
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
    const nav = useNavigate();

    const [jobShareReceivers, setJobShareReceivers] = useState([]);

    const onCopyJobLink = () => {
        document.getElementById("LinkCopiedMessage").textContent = "Đã sao chép";
        navigator.clipboard.writeText(window.location.href);
    };

    function onAddReceiverButtonClicked() {
        let element = document.getElementById("receiverSearchBox");
        if (jobShareReceivers.indexOf(element.value) === -1)
            setJobShareReceivers((oldReceivers) => [...oldReceivers, element.value]);
    }

    function ReceiverBadge(props) {
        const removeMyself = () => {
            setJobShareReceivers(jobShareReceivers.filter((item) => item != props.username));
        };
        return (
            <span className="badge badge-primary m-1" style={{ paddingInlineStart: "10px", borderRadius: "15px" }}>
                {props.username}
                <button className="btn-close" style={{ paddingInlineStart: "10px" }} onClick={removeMyself} />
            </span>
        );
    }

    function ReceiverBadges(props) {
        let badges = [];
        for (let i = 0; i < props.receivers.length; i++) {
            badges.push(<ReceiverBadge username={props.receivers[i]} />);
        }
        return badges;
    }

    return (
        <div className="container-fluid row" style={{ backgroundColor: "#e3f2fe31", padding: "10px" }}>
            <div className="col-8 ms-4">
                <JobInfo />
            </div>
            <div className="col">
                <div className="row justify-content-end">
                    <button
                        className="btn btn-secondary"
                        style={{ width: "100px", marginInlineEnd: "10px", borderRadius: "30px" }}
                        onClick={() => nav(-1)}>
                        Quay lại
                    </button>
                </div>
                <div className="row mt-2">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-success" style={{ borderRadius: "30px" }}>
                            Ứng tuyển ngay
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#JobShareModal"
                            style={{ borderRadius: "30px", marginInlineStart: "10px" }}
                            onClick={() => (document.getElementById("LinkCopiedMessage").textContent = "")}>
                            Chia sẻ
                        </button>
                        <div className="modal" id="JobShareModal" tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Chia sẻ tin tuyển dụng</h5>
                                        <small
                                            id="LinkCopiedMessage"
                                            className="text-success"
                                            style={{ paddingInlineStart: "10px" }}
                                        />
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={window.location.href}
                                            />
                                            <button
                                                className="btn btn-outline-success"
                                                type="button"
                                                onClick={onCopyJobLink}>
                                                Sao chép
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                            Đóng
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ShareJobViaMessageModal">
                                            Chia sẻ ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal" id="ShareJobViaMessageModal" tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Bạn muốn chia sẻ đến ai?</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group mb-3">
                                            <input
                                                id="receiverSearchBox"
                                                type="text"
                                                className="form-control"
                                                placeholder="Nhập tên người dùng..."
                                            />
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                                onClick={onAddReceiverButtonClicked}>
                                                Thêm
                                            </button>
                                        </div>
                                    </div>
                                    <div id="selectedReceiver" className="modal-body ms-2">
                                        <ReceiverBadges receivers={jobShareReceivers} />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#JobShareModal">
                                            Quay lại
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Gửi qua tin nhắn
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
