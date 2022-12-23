import React, { useState } from "react";

export function SearchBar() {
    
    return (
        <div className="input-group mb-5">
            <input type="text" class="form-control" placeholder="Tìm bài tuyển dụng"></input>
            <button className="btn btn-primary" type="button">Let's find out!</button>
        </div>
    )
}