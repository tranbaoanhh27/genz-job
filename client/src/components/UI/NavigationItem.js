import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationItem = (props) => {
    console.log(props.isDropdown);
    return (
        <>
            {props.isDropdown !== true && (
                <li id={props.item.id} className="nav-item ms-3" onClick={props.rerenderApp}>
                    <Link to={props.item.linkTo} className="nav-link" style={{ color: props.theme.text }}>
                        {props.item.title}
                    </Link>
                </li>
            )}
            {props.isDropdown === true && (
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: props.theme.text }}>
                        {props.item.title}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" style={{ background: props.theme.card }}>
                        {props.item.children.map((item) => (
                            <DropdownItem
                                id={item.id}
                                className="nav-item ms-3 dropdown-item"
                                onClick={props.rerenderApp}>
                                <Link to={item.linkTo} className="nav-link" style={{ color: "white" }}>
                                    {item.title}
                                </Link>
                            </DropdownItem>
                        ))}
                    </ul>
                </li>
            )}
        </>
    );
};

export default NavigationItem;

const DropdownItem = styled.li`
    color: inherit;

    &:hover {
        background: inherit;
        color: inherit;
        width: fit-content;
    }
`;
