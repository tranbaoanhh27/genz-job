import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const LOGO_URL =
    "https://raw.githubusercontent.com/theanhbr01/CSC13002/0ff1c72d43a53cfae8dad2d5c9e9ae70dcc1634f/client/src/assets/images/logo.svg";

const JOB_DESCRIPTION_SAMPLE =
    "Review business requirements working with team members\nPerform a technical analysis of requirements\nProduce a solid, detailed technical design\nWrite clean, modular, robust code to implement the desired requirements with little or no supervision\nWork with the other partners to triage and fix bugs with rapid turnaround\nContribute ideas for making the application better and easier to use\nDevelop and maintain mobile application using Android, React Native or Flutter framework\nActive participation in customer/partner design meetings and general engagements\nEnsure on time, on budget, and the quality of the product.\nReview business requirements working with team members\nPerform a technical analysis of requirements\nProduce a solid, detailed technical design\nWrite clean, modular, robust code to implement the desired requirements with little or no supervision\nWork with the other partners to triage and fix bugs with rapid turnaround\nContribute ideas for making the application better and easier to use\nDevelop and maintain mobile application using Android, React Native or Flutter framework\nActive participation in customer/partner design meetings and general engagements\nEnsure on time, on budget, and the quality of the product.";

function JobInfo() {
    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center">Chi tiết công việc</h3>
            </div>
            <div className="row" style={{ border: "1px solid gray", borderRadius: "5px", padding: "10px" }}>
                <div className="row">
                    <img className="col-3" src={LOGO_URL} width="100" height="100"></img>
                    <div className="col">
                        <div className="row">
                            <label className="col-3">Trạng thái:</label>
                            <span className="col badge badge-success" style={{ maxWidth: "80px", maxHeight: "20px" }}>
                                Đang tuyển
                            </span>
                        </div>
                        <div className="row">
                            <label className="col-3">Tên công việc:</label>
                            <label className="col" style={{ border: "1px solid gray", borderRadius: "5px" }}>
                                Thực tập Android Developer (Java/Kotlin)
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-3">Địa chỉ:</label>
                            <label className="col" style={{ border: "1px solid gray", borderRadius: "5px" }}>
                                12/21 Ngô Văn Khoai, Phường 2, Quận 6, TP.HCM
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-3">Công ty:</label>
                            <label className="col" style={{ border: "1px solid gray", borderRadius: "5px" }}>
                                Vip Technology - Chi nhánh Hồ Chí Minh
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label className="col-3">Một số thông tin:</label>
                    <label className="col" style={{ border: "1px solid gray", borderRadius: "5px" }}>
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

function JobListGroup() {
    return (
        <div className="list-group" style={{height: "450px", overflowY: "scroll"}}>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>
                <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>
                <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>
                <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
        </div>
    );
}

export default function JobseekerJobDetails() {
    const navigator = useNavigate();
    return (
        <div className="container-fluid row mt-2">
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
                <div className="row">
                    <JobListGroup />
                </div>
            </div>
        </div>
    );
}
