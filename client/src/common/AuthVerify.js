import React, { useEffect } from "react";
import { WithRouter } from "./WithRouter";
import AuthAPI from '../api/AuthApi';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = props.router.location;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        AuthAPI.Logout();
      }
    }
  }, [location]);

  return <div></div>;
};

export default WithRouter(AuthVerify);