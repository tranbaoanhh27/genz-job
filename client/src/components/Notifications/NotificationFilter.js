import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 49rem;
  height: fit-content;
  margin: 1rem auto;

  & select {
    border-radius: 30px;
    padding-inline: 1rem;
    background-color: #3a3b3c !important;
    color: white;
    border: none !important;
    outline: none !important;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
  }
`;

const DropdownButton = styled.button`
  background: #3a3b3c;
  border-radius: 50%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #3a3b3c;
  }

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const DropdownMenu = styled.div`
  background-color: #3a3b3c;

  & button {
    color: white;
  }
`;

const NotificationFilter = (props) => {
  const changeFilterHandler = (event) => {
    event.preventDefault();
    props.onChangeFilter(event.target.value);
  };

  const markAllAsReadHandler = (event) => {
    props.onMarkAllAsRead();
  };

  const removeAllHandler = (event) => {
    props.onRemoveAll();
  };

  return (
    <FilterContainer>
      <select value={props.unreadOnly ? "unreadOnly" : "all"} onChange={changeFilterHandler}>
        <option value="unreadOnly">Chưa đọc</option>
        <option value="all">Tất cả</option>
      </select>
      <div className="dropdown">
        <DropdownButton
          className="btn dropdown-toggle"
          type="button"
          id="notificationFilterActions"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <DropdownMenu className="dropdown-menu" aria-labelledby="notificationFilterActions">
          <button className="btn dropdown-item" type="button" onClick={markAllAsReadHandler}>
            Đánh dấu tất cả là đã đọc
          </button>
          <button className="btn dropdown-item" type="button" onClick={removeAllHandler}>
            Xóa tất cả thông báo
          </button>
        </DropdownMenu>
      </div>
    </FilterContainer>
  );
};

export default NotificationFilter;
