import React, { useState, useEffect } from 'react';
import { initRowsDataAccount, initRowsDataJobArticle, getHeaderRow } from '../../Data/Table'
import { Page } from '../../Data/Admin';

import $ from 'jquery';
$.DataTable = require('datatables.net');

export function HeaderRow({ page }) {

    let headerRow = getHeaderRow(page);

    return (
        <thead>
            <tr>
                { headerRow.map( (text) => <th>{text}</th>) }
            </tr>
        </thead>
    )
}

function Row({ row }) {

    let keys = Object.keys(row);
    let listTag = [];
    const delay = ms => new Promise(res => setTimeout(res, ms));


    for (let i = 0; i < keys.length; i++)
    {
        listTag.push( <td>{ row[keys[i]] }</td>)
    }

    console.log('hu');
    return listTag;
}

export function Rows({ page }) {

    // Becareful stupid variable in the data source. You can not sure that the variable in the data source is correctly contronled (such as some people forget reset it in souce data)
    const [listRow, setListRow] = useState([]);

    useEffect( () => {
        if (page === Page.Account) setListRow( initRowsDataAccount() );
        else if (page === Page.HireRecruiter) setListRow( initRowsDataJobArticle() );
    }, [page]);

    useEffect( () => {
        if (listRow.length === 0) return;
        const table = $('#dataTable').DataTable();

        return ( () => {
            table.destroy();
        })
    }, [listRow]);

    if (listRow.length === 0) return <p>Loading</p>;

    return (
        <tbody>
            { listRow.map( (row, id) => {
                return (
                    <tr id={`${id}`}>
                        <Row row={row}/>
                    </tr>
                )
            })}
        </tbody>
    )
}