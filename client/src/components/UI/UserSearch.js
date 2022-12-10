import React from "react";

const UserSearch = (props) => {
    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm người dùng..."
                aria-label="Search"
            />
            <button
                className="btn btn-outline-primary"
                style={{ width: "130px" }}
                type="submit">
                Tìm kiếm
            </button>
        </form>
    );
};

export default UserSearch;
