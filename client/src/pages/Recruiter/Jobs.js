import React from "react";
import RecruiterJobDetails from "../../components/Recruiter/JobDetails";

class JobListGroupItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: props.isActive,
            title: props.title,
            createDate: props.createDate,
        };
    }
    render() {
        return (
            <a
                href="#"
                className={`list-group-item list-group-item-action ${this.state.isActive ? "active" : ""}`}
                aria-current="true"
                style={{ padding: "20px" }}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.state.title}</h5>
                </div>
                <small>{`Ngày tạo: ${this.state.createDate}`}</small>
            </a>
        );
    }
}

const exampleJobs = [
    <JobListGroupItem
        isActive={true}
        title="Thực tập Lập trình viên Android (Java/Kotlin)"
        createDate="11 Tháng 01, 2021 11:11"
    />,
    <JobListGroupItem title="Thực tập Lập trình viên Android (Java/Kotlin)" createDate="11 Tháng 01, 2021 11:11" />,
    <JobListGroupItem title="Thực tập Lập trình viên Android (Java/Kotlin)" createDate="11 Tháng 01, 2021 11:11" />,
    <JobListGroupItem title="Thực tập Lập trình viên Android (Java/Kotlin)" createDate="11 Tháng 01, 2021 11:11" />,
    <JobListGroupItem title="Thực tập Lập trình viên Android (Java/Kotlin)" createDate="11 Tháng 01, 2021 11:11" />,
    <JobListGroupItem title="Thực tập Lập trình viên Android (Java/Kotlin)" createDate="11 Tháng 01, 2021 11:11" />,
];

export default function RecruiterJobs() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div
                        className="col-7 ms-5"
                        style={{ border: "1px solid gray", borderRadius: "20px", padding: "20px" }}>
                        <RecruiterJobDetails />
                    </div>
                    <div className="col">
                        <div className="container">
                            <button className="row btn btn-block btn-primary" style={{ width: "425px" }}>
                                Thêm tin tuyển dụng
                            </button>
                            <div className="input-group row mt-3" style={{ width: "425px" }}>
                                <input
                                    className="col input-group-text text-start"
                                    placeholder="Tìm tin tuyển dụng..."></input>
                                <button className="btn btn-secondary col-3">Tìm kiếm</button>
                            </div>
                            <div className="row mt-3" style={{ width: "425px" }}>
                                <label className="col text-start" style={{ fontSize: "15px" }}>
                                    Các tin tuyển dụng đã tạo
                                </label>
                                <select
                                    className="col btn btn-secondary custom-select-sm"
                                    name="sortJobs"
                                    style={{ fontSize: "14px" }}>
                                    <option value="byName">Sắp xếp theo tên</option>
                                    <option value="byCreatedDate">Sắp xếp theo ngày tạo</option>
                                    <option value="byNewCandidate">Sắp xếp theo ứng viên mới</option>
                                </select>
                            </div>
                            <div
                                className="row mt-3"
                                style={{ width: "425px", height: "422px", overflowY: "scroll", overflowX: "hidden" }}>
                                <div className="list-group">{exampleJobs}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
