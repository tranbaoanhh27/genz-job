import React from "react";
import { useState } from "react";

const LOGO_URL =
    "https://raw.githubusercontent.com/theanhbr01/CSC13002/0ff1c72d43a53cfae8dad2d5c9e9ae70dcc1634f/client/src/assets/images/logo.svg";

function CandidateListGroup(candidateItems) {
    return <div className="list-group">{candidateItems}</div>;
}

function CandidateListGroupItem(props) {
    const [name, setName] = useState(props.candidateName);
    const [status, setStatus] = useState(props.applyStatus);
    const [exp, setExp] = useState(props.experienceLevel);
    const [date, setDate] = useState(props.applyDate);

    return (
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between row mt-1">
                <h4 className="col">{name}</h4>
                <span
                    className={`badge rounded-pill col ${
                        status === "accepted"
                            ? "badge-success"
                            : status === "declined"
                            ? "badge-danger"
                            : "badge-secondary"
                    }`}
                    style={{ maxWidth: "110px", maxHeight: "22px" }}>
                    {status === "accepted" ? "Đã chấp nhận" : status === "declined" ? "Đã từ chối" : "Đang xem xét"}
                </span>
            </div>
            <div className="mt-2 row">
                <p className="col">{`Mức kinh nghiệm: ${exp}`}</p>
                <small className="col text-end">{`Ngày ứng tuyển: ${date}`}</small>
            </div>
        </a>
    );
}

const itemList = [
    <CandidateListGroupItem
        candidateName="Mark Zuckerberg"
        applyStatus="accepted"
        experienceLevel="Senior"
        applyDate="11 Tháng 1, 2011 11:11"
    />,
    <CandidateListGroupItem
        candidateName="Mark Zuckerberg"
        applyStatus="declined"
        experienceLevel="Senior"
        applyDate="11 Tháng 1, 2011 11:11"
    />,
    <CandidateListGroupItem
        candidateName="Mark Zuckerberg"
        applyStatus="reviewing"
        experienceLevel="Senior"
        applyDate="11 Tháng 1, 2011 11:11"
    />,
    <CandidateListGroupItem
        candidateName="Mark Zuckerberg"
        applyStatus="accepted"
        experienceLevel="Senior"
        applyDate="11 Tháng 1, 2011 11:11"
    />,
    <CandidateListGroupItem
        candidateName="Mark Zuckerberg"
        applyStatus="accepted"
        experienceLevel="Senior"
        applyDate="11 Tháng 1, 2011 11:11"
    />,
    <CandidateListGroupItem
        candidateName="Mark Zuckerberg"
        applyStatus="accepted"
        experienceLevel="Senior"
        applyDate="11 Tháng 1, 2011 11:11"
    />,
];

class RecruiterJobDetails extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img className="rounded row" width={"100"} height={"100"} src={LOGO_URL} />
                            <button className="btn btn-primary row mt-1">Thay đổi ảnh</button>
                        </div>
                        <div className="col container">
                            <div className="row">
                                <label className="col-4">Tên công việc</label>
                                <input type={"text"} className="col"></input>
                            </div>
                            <div className="row mt-3">
                                <label className="col-4">Tên công ty</label>
                                <input type={"text"} className="col"></input>
                            </div>
                            <div className="row mt-3">
                                <label className="col-4">Mô tả công việc</label>
                                <textarea className="col"></textarea>
                            </div>
                            <div className="row mt-3">
                                <button className="col btn btn-danger ms-3 me-3">Xoá tin tuyển dụng này</button>
                                <button className="col btn btn-success ms-3 me-3">Lưu</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <label className="col">Danh sách ứng viên</label>
                        <button className="col text-end btn btn-link">Các ứng viên tiềm năng</button>
                    </div>
                    <div className="row" style={{ height: "300px", overflowY: "scroll", overflowX: "hidden" }}>
                        {CandidateListGroup(itemList)}
                    </div>
                </div>
            </>
        );
    }
}

export default RecruiterJobDetails;
