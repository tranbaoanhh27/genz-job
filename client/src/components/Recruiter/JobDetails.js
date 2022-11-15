import React from "react";

const LOGO_URL =
    "https://raw.githubusercontent.com/theanhbr01/CSC13002/0ff1c72d43a53cfae8dad2d5c9e9ae70dcc1634f/client/src/assets/images/logo.svg";

const itemList = [
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

class RecruiterJobDetails extends React.Component {
    render() {
        return (
            <>
                <div className="container ms-3 mt-3 mb-3 me-3">
                    <div className="row">
                        <div className="col-3">
                            <img className="rounded row" width={"100"} height={"100"} src={LOGO_URL} />
                            <button className="btn btn-primary row mt-1">
                                Thay đổi ảnh
                            </button>
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
                    <div className="list-group row" style={{ height: "300px", overflowY: "scroll" }}>
                        {itemList}
                    </div>
                </div>
            </>
        );
    }
}

export default RecruiterJobDetails;
