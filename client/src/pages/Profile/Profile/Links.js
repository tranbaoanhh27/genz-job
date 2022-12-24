import React, { useState, useEffect } from "react";
import { socialLinks } from "../../../Data/Profile";

import { ProfileLocationPrint } from "./../../../Data/Profile"

function Link({ icon, linkText }) {
    return (
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <a href={`https://${linkText}`}>
                    <i className={`${icon} fa-lg`} style={{ color: "var(--notice)" }}></i>
                </a>
                <div>
                    <p className="mb-0" style={{ color: "var(--primary)" }} contentEditable="true">
                        {linkText}
                    </p>
                </div>
            </li>
    );
}

export function Links() {
    const [allLinks, setAllLinks] = useState([]);

    useEffect(() => {
        setAllLinks(() => socialLinks);
    }, []);

    return (
        <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    {allLinks.map((link) => (
                        <Link icon={link.icon} linkText={link.text}></Link>
                    ))}
                </ul>
            </div>
            <div className="card-footer fst-italic">
                Bấm vào icon để truy cập đường dẫn tương ứng
            </div>
        </div>
    );
}
