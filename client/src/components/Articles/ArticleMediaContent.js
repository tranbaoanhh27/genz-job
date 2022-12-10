import React from "react";

const ArticleMediaContent = (props) => {
    return(
        <div>
            <img src={props.contentURL} style={{width: "40rem", borderRadius: "30px"}}/>
        </div>
    );
}

export default ArticleMediaContent;