import React, { Component, useState } from "react";
import { Logo } from "./Logo"
import { Button } from "../../components/ui/Button"
import { InputTextField } from "../../components/ui/InputTextField"

export function SignUpJobSearch({ setComponent }) {
    return (
        <div id="signInSignUpComponent"
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border">
            <div className="d-flex flex-column flex-grow-1">
                <Logo setComponent={setComponent} />

                <h2 className="text-center fw-normal mb-3">Đăng ký</h2>
                <h3 className="text-center text-muted mb-4">Tìm việc làm</h3>

                <form className="w-50 mx-auto">
                    <div className="mb-4">
                        <InputTextField
                            id="fullName"
                            placeholder="Họ và tên"
                            name="fullName"
                        />
                    </div>
                    <div className="mb-4">
                        <InputTextField
                            id="phoneNumber"
                            placeholder="Số điện thoại"
                            name="phoneNumber"
                        />
                    </div>

                    <div className="row">
                        <div className="col mb-4">
                            <InputTextField
                                type="password"
                                id="password"
                                placeholder="Mật khẩu"
                                name="password"
                            />
                        </div>
                        <div className="col mb-4">
                            <InputTextField
                                type="password"
                                id="verify"
                                placeholder="Xác nhận mật khẩu"
                                name="verify"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <Button type={"submit"} style={{ backgroundColor: "var{--primary}" }}>
                            Đăng ký
                        </Button>
                    </div>

                    <hr className="solid mt-5" />

                    <p className="small fw-bold mt-0">
                        Đã có tài khoản?{" "}
                        <a
                            href="#!"
                            className="link-danger"
                            onClick={() => setComponent("logIn")}>
                            Đăng nhập
                        </a>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
}