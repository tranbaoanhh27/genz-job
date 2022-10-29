import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./constants/apiConstants";

function Logo({ setDivision }) {
    return (
        <img
            className="img-fluid mx-auto block mb-5"
            onClickCapture={() => setDivision("SignInOrLogIn")}
            style={{ maxWidth: "15%", cursor: "pointer" }}
            src="logo.svg"
        />
    );
}

function CarouselColumn() {
    return (
        <div className="d-flex col-lg-5 align-items-center justify-content-center h-100">
            <div
                id="carousel-boarding"
                className="carousel slide"
                data-interval="1000"
                data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carousel-boarding"
                        data-bs-slide-to="0"
                        className="active"></button>
                    <button
                        type="button"
                        data-bs-target="#carousel-boarding"
                        data-bs-slide-to="1"></button>
                    <button
                        type="button"
                        data-bs-target="#carousel-boarding"
                        data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="image0.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="image1.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="image2.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-boarding"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-boarding"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}

function SignInSignUpSelection({ division, setDivision }) {
    const handleClickButton1 = () => {
        if (division === "SelectTypeSignUp") {
            setDivision("SignUpJobSearch");
        } else {
            setDivision("SelectTypeSignUp");
        }
    };

    const handleClickButton2 = () => {
        if (division === "SelectTypeSignUp") {
            setDivision("SignUpRecruiter");
        } else {
            setDivision("LogIn");
        }
    };

    return (
        <div
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border"
            style={{
                backgroundColor: "white",
                borderRadius: "50px 0px 0px 50px",
            }}>
            <div className="d-flex flex-column flex-grow-1">
                <Logo setDivision={setDivision} />

                <h2 className="text-center fw-normal mb-5">Bạn muốn?</h2>

                <div className="d-grid gap-5 col-6 mx-auto">
                    <button
                        className="btn btn-primary shadow"
                        style={{ backgroundColor: "#545ABE" }}
                        type="submit"
                        onClick={handleClickButton1}>
                        {division === "SelectTypeSignUp"
                            ? "Đăng ký tìm việc"
                            : "Đăng ký"}
                    </button>
                    <button
                        className="btn btn-primary shadow"
                        style={{ backgroundColor: "#545ABE" }}
                        type="submit"
                        onClick={handleClickButton2}>
                        {division === "SelectTypeSignUp"
                            ? "Đăng ký tìm người"
                            : "Đăng nhập"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SignUpJobSearch({ setDivision }) {
    return (
        <div
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border"
            style={{
                backgroundColor: "white",
                borderRadius: "50px 0px 0px 50px",
            }}>
            <div className="d-flex flex-column flex-grow-1">
                <Logo setDivision={setDivision} />

                <h2 className="text-center fw-normal mb-3">Đăng ký</h2>
                <h3 className="text-center text-muted mb-4">Tìm việc làm</h3>

                <form className="w-50 mx-auto">
                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="text"
                            id="realname"
                            placeholder="Họ và tên"
                            name="realName"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="tel"
                            id="phoneNum"
                            placeholder="Số điện thoại"
                            name="phoneNum"
                        />
                    </div>

                    <div className="row">
                        <div className="col mb-4">
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                placeholder="Mật khẩu"
                                name="pswd"
                            />
                        </div>
                        <div className="col mb-4">
                            <input
                                className="form-control"
                                type="password"
                                id="repeatPassword"
                                placeholder="Xác nhận mật khẩu"
                                name="verifyPswd"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-primary shadow"
                            style={{ backgroundColor: "#545ABE" }}
                            type="sumbmit">
                            Đăng ký
                        </button>
                    </div>

                    <hr className="solid mt-5" />

                    <p className="small fw-bold mt-0">
                        Đã có tài khoản?{" "}
                        <a
                            href="#!"
                            className="link-danger"
                            onClick={() => setDivision("LogIn")}>
                            Đăng nhập
                        </a>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
}

function SignUpRecruiter({ setDivision }) {
    return (
        <div
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border"
            style={{
                backgroundColor: "white",
                borderRadius: "50px 0px 0px 50px",
            }}>
            <div className="d-flex flex-column flex-grow-1">
                <Logo setDivision={setDivision} />

                <h2 className="text-center fw-normal mb-3">Đăng ký</h2>
                <h3 className="text-center text-muted mb-4">Săn đầu người</h3>

                <form className="w-50 mx-auto">
                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="text"
                            id="realname"
                            placeholder="Họ và tên"
                            name="realName"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="tel"
                            id="phoneNum"
                            placeholder="Số điện thoại"
                            name="phoneNum"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="text"
                            id="company"
                            placeholder="Đại diện doanh nghiệp"
                            name="company"
                        />
                    </div>

                    <div className="row">
                        <div className="col mb-4">
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                placeholder="Mật khẩu"
                                name="pswd"
                            />
                        </div>
                        <div className="col mb-4">
                            <input
                                className="form-control"
                                type="password"
                                id="repeatPassword"
                                placeholder="Xác nhận mật khẩu"
                                name="verifyPswd"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-primary shadow"
                            style={{ backgroundColor: "#545ABE" }}
                            type="sumbmit">
                            Đăng ký
                        </button>
                    </div>

                    <hr className="solid mt-5" />

                    <p className="small fw-bold mt-0">
                        Đã có tài khoản?{" "}
                        <a
                            href="#!"
                            className="link-danger"
                            onClick={() => setDivision("LogIn")}>
                            Đăng nhập
                        </a>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
}

function LogIn({ setDivision }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSignInSubmitButtonClicked = (event) => {
        event.preventDefault();
        console.log("Login Submit Button Clicked!");

        // Send Request to Back-end
        const requestBody = {
            userName: userName,
            password: password,
        };
        axios
            .post(API_BASE_URL + "/authentication/login", requestBody)
            .then((response) => {
                if (response.status === 200) {
                    console.log(
                        "Received response for Log in POST request: ",
                        response.data
                    );
                }
            })
            .catch((error) => {
                console.log("Log In POST request error: " + error);
            });
    };

    return (
        <div
            className="col-lg-7 d-flex align-items-center h-100 shadow-lg border"
            style={{
                backgroundColor: "white",
                borderRadius: "50px 0px 0px 50px",
            }}>
            <div className="d-flex flex-column flex-grow-1">
                <Logo setDivision={setDivision} />

                <h2 className="text-center fw-normal mb-4">Đăng nhập</h2>

                <form className="w-50 mx-auto">
                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="text"
                            id="username"
                            placeholder="Nhập tên đăng nhập"
                            name="username"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            name="pswd"
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </div>

                    <div className="d-flex form-check mb-5">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                            />{" "}
                            Nhớ mật khẩu
                        </label>
                        <a href="#!" className="text-body ms-auto">
                            Quên mật khẩu?
                        </a>
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-primary shadow"
                            style={{ backgroundColor: "#545ABE" }}
                            type="submit"
                            onClick={onSignInSubmitButtonClicked}>
                            Đăng nhập
                        </button>
                    </div>

                    <hr className="solid mt-5" />

                    <p className="small fw-bold mt-0">
                        Chưa có tài khoản?
                        <a
                            href="#!"
                            className="link-danger"
                            onClick={() => setDivision("SelectTypeSignUp")}>
                            Đăng ký
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

function returnComponent(division, setDivision) {
    switch (division) {
        case "SignInOrLogIn":
            return (
                <SignInSignUpSelection
                    setDivision={setDivision}
                    division={division}
                />
            );

        case "SelectTypeSignUp":
            return (
                <SignInSignUpSelection
                    setDivision={setDivision}
                    division={division}
                />
            );

        case "SignUpJobSearch":
            return <SignUpJobSearch setDivision={setDivision} />;

        case "SignUpRecruiter":
            return <SignUpRecruiter setDivision={setDivision} />;

        default:
            return <LogIn setDivision={setDivision} />;
    }
}

function App() {
    //React States
    const [division, setDivision] = useState("SignInOrLogIn");

    return (
        <div className="App">
            <section className="vh-100" style={{ backgroundColor: "#545ABE" }}>
                <div className="container-fluid h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <CarouselColumn />
                        {returnComponent(division, setDivision)}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;