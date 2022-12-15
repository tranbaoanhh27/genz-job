import React from "react";
import "../../assets/css/NotificationFilter.css";

const NotificationFilter = (props) => {
    const changeFilterHandler = (event) => {
        event.preventDefault();
        props.onChangeFilter(event.target.value);
    };

    const markAllAsReadHandler = (event) => {
        props.onMarkAllAsRead();
    }

    const removeAllHandler = (event) => {
        props.onRemoveAll();
    }

    return (
        <div className="notification-filter">
            <select
                value={props.unreadOnly ? "unreadOnly" : "all"}
                onChange={changeFilterHandler} >
                <option value="unreadOnly">Chưa đọc</option>
                <option value="all">Tất cả</option>
            </select>
            <div className={`dropdown`}>
                <button
                    className="btn dropdown-toggle notification-filter__actions-button"
                    type="button"
                    id="notificationFilterActionsDropdownButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"></button>
                <div
                    className="dropdown-menu notification-filter__dropdown-menu-buttons"
                    aria-labelledby="notificationFilterActionsDropdownButton">
                    <button className="btn dropdown-item" type="button" onClick={markAllAsReadHandler}>
                        Đánh dấu tất cả là đã đọc
                    </button>
                    <button className="btn dropdown-item" type="button" onClick={removeAllHandler}>
                        Xóa tất cả thông báo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationFilter;
