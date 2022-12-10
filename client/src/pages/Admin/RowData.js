import React, { useState, useEffect } from 'react';
import { initRowsDataAccount, initRowsDataJobArticle } from '../../Data/Table'

export function HeaderRow({ page }) {

    let headerRowText = [];

    if (page === "Tài khoản người dùng") {
        headerRowText.push("STT"); headerRowText.push("Username"); headerRowText.push("Họ và tên"); headerRowText.push("Năm sinh"); headerRowText.push("Thời gian tạo"); headerRowText.push("Vai trò");
    }
    else if (page === "Bài đăng tuyển dụng") {
        headerRowText.push("STT"); headerRowText.push("Username đăng bài"); headerRowText.push("Họ và tên"); headerRowText.push("Công ty"); headerRowText.push("Thời gian tạo"); headerRowText.push("Tiêu đề");
    }

    return (
        <thead>
            <tr>
                { headerRowText.map( (text) => <th>{text}</th>)}
            </tr>
        </thead>
    )
}

function Row(row) {
    let keys = Object.keys(row);
    let listTag = [];

    console.log(keys);

    for (let i = 0; i < keys.length; i++)
    {
        listTag.push( <td>{ row[keys[i]] }</td>)
    }

    return listTag;
}

export function Rows({ page }) {
    
    const [listRow, setListRow] = useState([]);

    useEffect( () => {
        if (page === "Tài khoản người dùng") setListRow( initRowsDataAccount() );
        else if (page === "Bài đăng tuyển dụng") setListRow( initRowsDataJobArticle() );
    })

    return (
        <tbody>
            { listRow.map( (row) => {
                return (
                    <tr>{ Row(row) }</tr>
                )
            })}
        </tbody>
    )
}