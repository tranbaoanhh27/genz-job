import React, { useContext, useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input";
import AuthAPI from "../../../api/AuthApi";
import RoleApi from "../../../api/RoleApi";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../contexts/app-context";
import ToastContext from "../../../contexts/toast-context";
import useInput from "../../../hooks/use-input";
import Loader from "../../UI/Loader";

import css from "../../../assets/css/Form.module.css";
import strings from "../../../assets/strings";

const SignUp = () => {
    const validateUsername = (username) => username.trim().length > 0;
    const validateEmail = (email) => email.indexOf("@") > -1;
    const validatePassword = (password) => password.trim().length > 5;
    const validateVerifyPass = (passVerification) => passVerification === password;

    const [username, usernameHasError, usernameChangeHandler, usernameBlurHandler] = useInput(validateUsername);
    const [email, emailHasError, emailChangeHandler, emailBlurHandler] = useInput(validateEmail);
    const [password, passwordHasError, passwordChangeHandler, passwordBlurHandler] = useInput(validatePassword);
    const [verifyPass, verifyPassHasError, verifyPassChangeHandler, verifyPassBlurHandler] =
        useInput(validateVerifyPass);
    const [role, setRole] = useState("recruiter");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const toastContext = useContext(ToastContext);

    const roleChangeHandler = (event) => setRole(event.target.value);

    const signUpHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const signupResponse = await AuthAPI.Signup(username, email, password);
            const signupData = signupResponse.data;

            const userId = signupData.data.id;
            await RoleApi.assign(userId, role);
            toastContext.addMessage({
                type: "success",
                title: "Đăng ký thành công!",
                content: "Bạn đã đăng ký tài khoản mới thành công! Đang chuyển hướng đến trang đăng nhập!",
            })

            navigate("/login");
        } catch (error) {
            toastContext.addMessage({
                type: "error",
                title: "Đăng ký không thành công!",
                content: error.message || "Đã có lỗi xảy ra, vui lòng liên hệ quản trị viên để được hỗ trợ!",
            })
        }
        setLoading(false);
    };

    const formIsValid =
        validateUsername(username) &&
        validateEmail(email) &&
        validatePassword(password) &&
        validateVerifyPass(verifyPass);

    return (
        <>
            <h2 className="text-center fw-normal mb-3">Đăng ký</h2>

            <form className={`mx-auto ${css.form}`} onSubmit={signUpHandler}>
                <div className="mb-4">
                    <select onChange={roleChangeHandler} value={role} className={css.roleSelect}>
                        <option value="recruiter">{strings.RECRUITER}</option>
                        <option value="job-seeker">{strings.JOBSEEKER}</option>
                    </select>
                </div>

                <div className="row">
                    <div className={`col mb-4 ${css.labelAndInput}`}>
                        <label htmlFor="username">{strings.USERNAME}</label>
                        <Input
                            className={usernameHasError ? css.invalidInput : ""}
                            id="username"
                            placeholder="Tên tài khoản"
                            name="userName"
                            value={username}
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHandler}
                        />
                        {usernameHasError && <p className={css.errorText}>{strings.USERNAME_MUST_BE_NOT_EMPTY}</p>}
                    </div>
                    <div className={`col mb-4 ${css.labelAndInput}`}>
                        <label htmlFor="email">{strings.EMAIL}</label>
                        <Input
                            className={emailHasError ? css.invalidInput : ""}
                            type="email"
                            id="email"
                            placeholder="Địa chỉ email"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                        {emailHasError && <p className={css.errorText}>{strings.EMAIL_MUST_CONTAINS_ATCHAR}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className={`col mb-4 ${css.labelAndInput}`}>
                        <label htmlFor="password">{strings.PASSWORD}</label>
                        <Input
                            className={passwordHasError ? css.invalidInput : ""}
                            type="password"
                            id="password"
                            placeholder="Mật khẩu"
                            name="password"
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                        />
                        {passwordHasError && (
                            <p className={css.errorText}>{strings.PASSWORD_MUST_BE_AT_LEAST_SIX_CHARS}</p>
                        )}
                    </div>
                    <div className={`col mb-4 ${css.labelAndInput}`}>
                        <label htmlFor="verify">{strings.CONFIRM_PASSWORD}</label>
                        <Input
                            className={verifyPassHasError ? css.invalidInput : ""}
                            type="password"
                            id="verify"
                            placeholder="Xác nhận mật khẩu"
                            name="verify"
                            value={verifyPass}
                            onChange={verifyPassChangeHandler}
                            onBlur={verifyPassBlurHandler}
                        />
                        {verifyPassHasError && <p className={css.errorText}>{strings.PASSWORD_NOT_MATCH}</p>}
                    </div>
                </div>

                <div className={`text-center ${css.submit}`}>
                    {!loading && (
                        <Button type="submit" disabled={!formIsValid}>
                            Đăng ký
                        </Button>
                    )}
                    {loading && <Loader size="10px" />}
                </div>

                <hr className="solid mt-5" />

                <p className="small fw-bold mt-0">
                    Đã có tài khoản?{" "}
                    <a className="link-danger" href="/login">
                        Đăng nhập
                    </a>{" "}
                </p>
            </form>
        </>
    );
};

export default SignUp;
