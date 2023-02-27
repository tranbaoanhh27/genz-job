import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ item, iconSize = '24px' }) => {
    return (
        <div className="dropdown">
            <img
                className="dropdown-toggle"
                alt="show dropdown"
                src={item.icon}
                title={item.title}
                width={iconSize}
                height={iconSize}
                data-bs-toggle="dropdown" />
            <ul className="dropdown-menu">
                {item.children.map((item) => (
                    <li key={item.title}>
                        <Link className="dropdown-item" to={item.linkTo}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
