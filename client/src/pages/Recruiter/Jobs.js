import React from "react";
import RecruiterJobDetails from "../../components/Recruiter/JobDetails";

const exampleJobs = [
    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
    </a>,
    <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
    </a>,
    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
    </a>,
    <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
    </a>,
];

export default function RecruiterJobs() {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-7 ms-5" style={{border:"1px solid gray", borderRadius:"16px"}}>
                        <RecruiterJobDetails />
                    </div>
                    <div className="col">
                        <div className="container">
                            <button className="row btn btn-block btn-primary">Thêm tin tuyển dụng</button>
                            <div className="input-group row mt-3">
                                <input className="col input-group-text text-start" placeholder="Tìm tin tuyển dụng..."></input>
                                <button className="btn btn-secondary col-3">Tìm kiếm</button>
                            </div>
                            <div className="row mt-3">
                                <label className="col text-start" style={{ fontSize: "16px" }}>
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
                            <div className="list-group row mt-3" style={{ height: "400px", overflowY: "scroll" }}>
                                {exampleJobs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
