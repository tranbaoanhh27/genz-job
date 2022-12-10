import React, { useState, useEffect } from 'react';
import { SideBar } from './SideBar';
import { Table } from './Table';

export function Admin() {

    const [page, setPage] = useState("Tài khoản người dùng");

    return (
        <div className='Admin' id="wrapper">

            <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>
            <link href="../../assets/css/sb-admin-2.min.css" rel="stylesheet"></link>
            <link href="../../assets/datatables/dataTables.bootstrap4.min.css" rel="stylesheet"></link>
            <script src="../../assets/datatables/jquery.min.js"></script>
            <script src="../../assets/datatables/jquery.easing.min.js"></script>
            <script src="../../assets/datatables/sb-admin-2.min.js"></script>
            <script src="../../assets/datatables/jquery.dataTables.min.js"></script>
            <script src="../../assets/datatables/dataTables.bootstrap4.min.js"></script>

            <SideBar setPage={setPage}/>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Table page={page}/>
                </div>
            </div>

        </div>
    )
}