import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

import css from "./NavigationItem.module.css";

const NavigationItem = (props) => {
    return (
        <>
            {props.isDropdown !== true && (
                <li className={css.item} id={props.item.id} onClick={props.rerenderApp}>
                    <Link className={css.link} to={props.item.linkTo}>
                        {!props.item.icon && props.item.title}
                        {props.item.icon && (
                            <img
                                className={css.icon}
                                src={props.item.icon}
                                alt={props.item.title}
                                title={props.item.title}
                            />
                        )}
                    </Link>
                </li>
            )}
            {props.isDropdown === true && (
                <li className={css.item}>
                    <Link className={css.link} to={props.item.linkTo}>
                        <Dropdown item={props.item} />
                    </Link>
                    {/* <p className={css.link}>{props.item.title}</p> */}
                    {/* <ul>
                        {props.item.children.map((item) => (
                            <li key={item.id} id={item.id} onClick={props.rerenderApp}>
                                <Link to={item.linkTo}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul> */}
                </li>
            )}
        </>
    );
};

export default NavigationItem;
