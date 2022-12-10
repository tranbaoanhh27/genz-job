import React, { useState, useEffect } from 'react';
import { HeaderRow, Rows } from './RowData';
import { Modal } from './Modal';

export function Table ({ page })
{
    const listButtonText = [];

    if (page === "Tài khoản người dùng")
    {
        listButtonText.push("Tạo tài khoản mới"); listButtonText.push("Chi tiết tài khoản");
    }
    else if (page == "Bài đăng tuyển dụng")
    {
        listButtonText.push("Tạo bài đăng mới"); listButtonText.push("Chi tiết bài đăng");
    }

    return (
        
        /* Begin page content */
        <div className='Table container-fluid mt-5'>

            { /* Page Heading */ }
            <h1 className="h3 mb-2 text-gray-800">{page}</h1>
            <div className='mt-5 mb-5'>
                <button type="button" className='btn btn-primary'>{listButtonText[0]}</button>
                <button type="button" className='btn btn-primary ml-3'>{listButtonText[1]}</button>
            </div>

            { /* DataTales Example */ }
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <HeaderRow page={page}/>
                            <Rows page={page}/>
                        </table>
                    </div>
                </div>
            </div>

            
            { /* /.container-fluid */ }

        { /* End of Main Content */ }

        { /* Modal call */ }

        

        </div>

    )
}