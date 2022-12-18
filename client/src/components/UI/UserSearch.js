import React from "react";

const UserSearch = (props) => {
    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm người dùng..."
                aria-label="Search"
                style={{ background: props.theme.input, color: props.theme.text, border: "0px" }}
            />
            <button className="btn btn-success" style={{ width: "130px" }} type="submit">
                Tìm kiếm
            </button>
        </form>
    );
};

export default UserSearch;
