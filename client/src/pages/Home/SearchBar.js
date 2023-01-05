import React, { useState, useRef, memo } from "react";

import { defaultGroupJobsHomepage } from "../../Data/Homepage";

const SearchBar = React.memo( ( { setGroupJob } ) => {

    const inputElement = useRef();
    const onSeachHandler = () => {

        let text = inputElement.current.value;
        if (text === "") {
            setGroupJob(defaultGroupJobsHomepage); 
            return;
        }
        setGroupJob( [{
            nameGroup: `Kết quả tìm kiếm cho \"${text}\"`,
            searchText: text,
            listFilter: null
        }])
    }
    const onKeyDownEnter = (e) => {
        onSeachHandler();
    }

    return (
        <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Tìm bài tuyển dụng" ref={inputElement} onChange={onKeyDownEnter}></input>
            <button className="btn btn-primary" type="button" onClick={onSeachHandler}>
                Let's find out!
            </button>
        </div>
    );
})

export { SearchBar }
