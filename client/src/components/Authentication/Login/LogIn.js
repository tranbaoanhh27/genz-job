import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input";
import AuthAPI from "../../../api/AuthApi";
import AppContext from "../../../contexts/app-context";
import useInput from "../../../hooks/use-input";
import Loader from "../../UI/Loader";

import css from "../../../assets/css/Form.module.css";
import strings from "../../../assets/strings";

const LogIn = () => {
    const validateUsername = (username) => username.trim().length > 0;
    const validatePassword = (password) => password.trim().length > 5;

    const [isLoading, setIsLoading] = useState(false);
    const [username, usernameHasError, usernameChangeHandler, usernameBlurHandler] = useInput(validateUsername);
    const [password, passwordHasError, passwordChangeHandler, passwordBlurHandler] = useInput(validatePassword);

    const navigate = useNavigate();
    const appContext = useContext(AppContext);

    const submitHandler = async (event) => {
        event.preventDefault();

        // Send Request to Back-end
        setIsLoading(true);
        try {
            const response = await AuthAPI.Login(username, password);
            appContext.setUser(response.data);
            alert(strings.LOGIN_SUCCESSFULLY);
            navigate("/");
        } catch (error) {
            alert(error.message || strings.SOMETHING_WENT_WRONG);
        }
        setIsLoading(false);
    };

    const formIsValid = validateUsername(username) && validatePassword(password);

    return (
        <>
            <h2 className="text-center fw-normal mb-4">Đăng nhập</h2>

            <form className={`mx-auto ${css.form}`} onSubmit={submitHandler}>
                <div className={`mb-4 ${css.labelAndInput}`}>
                    <label htmlFor="username">{strings.USERNAME}</label>
                    <Input
                        className={usernameHasError ? css.invalidInput : ""}
                        id="username"
                        placeholder="Nhập tên đăng nhập"
                        name="username"
                        onChange={usernameChangeHandler}
                        onBlur={usernameBlurHandler}
                    />
                    {usernameHasError && <p className={css.errorText}>{strings.USERNAME_MUST_BE_NOT_EMPTY}</p>}
                </div>

                <div className={`mb-4 ${css.labelAndInput}`}>
                    <label htmlFor="username">{strings.PASSWORD}</label>
                    <Input
                        className={passwordHasError ? css.invalidInput : ""}
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        name="password"
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                    />
                    {passwordHasError && <p className={css.errorText}>{strings.PASSWORD_MUST_BE_AT_LEAST_SIX_CHARS}</p>}
                </div>

                <div className="d-flex form-check mb-5">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Nhớ mật khẩu
                    </label>
                    <a href="#!" className="ms-auto" style={{ color: "white" }}>
                        Quên mật khẩu?
                    </a>
                </div>

                <div className={`text-center ${css.submit}`}>
                    {!isLoading && (
                        <Button type={"submit"} disabled={!formIsValid}>
                            Đăng nhập
                        </Button>
                    )}
                    {isLoading && <Loader size="10px" />}
                </div>

                <hr className="solid mt-5" />

                <p className="small fw-bold mt-0">
                    Chưa có tài khoản?{" "}
                    <a href="/signup" className="link-danger">
                        Đăng ký
                    </a>
                </p>
            </form>
        </>
    );
};

export default LogIn;
