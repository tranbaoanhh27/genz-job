import React from "react";
import '../../assets/css/MyCard.css'

const MyCard = (props) => {
    return(
        <div className={`my-card ${props.className}`} style={props.style}>{props.children}</div>
    );
}

export default MyCard;