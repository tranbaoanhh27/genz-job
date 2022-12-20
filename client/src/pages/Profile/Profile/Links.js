import React, { useState, useEffect } from 'react'
import { socialLinks } from '../../../Data/Profile';

function Link({icon, linkText}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
        <i className={`${icon} fa-lg`} style={{color: "var(--notice)"}}></i>
        <p className="mb-0" style={{color: "var(--primary)"}}>{linkText}</p>
        </li>
    )
}

export function Links() {

    const [allLinks, setAllLinks] = useState([]);

    useEffect( () => {
        setAllLinks( () => socialLinks);
    }, []);

    return (
        <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
                {allLinks.map( link => <Link icon={link.icon} linkText={link.text}></Link>)}
            </ul>
            </div>
        </div>
    )
}