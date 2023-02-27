import React, { useContext } from "react";
import ToastContext from "../../../contexts/toast-context";
import css from "./Toast.module.css";
import ToastNotification from "./ToastNotification/ToastNotification";

const Toast = () => {
    const toastContext = useContext(ToastContext);
    return (
        <div className={css.ToastContainer}>
            {toastContext.messages.map((message) => (
                <ToastNotification key={message.id} message={message} />
            ))}
        </div>
    );
}

export default Toast;