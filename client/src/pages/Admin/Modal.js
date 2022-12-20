import React, { useState, useEffect } from 'react';
import { getUserAccountInformation } from '../../Data/Table';
import { RadioButton } from '../../components/UI/RadioButton';
import { Page } from '../../Data/Admin';

function UserAccountModal({ userAccountInfo }) {

    let detectTypeInput = ( (key, curValue) => {

        if (key === "Ngày tháng năm sinh") return <input type="date" defaultValue={curValue}></input>;
        else if (key === "Giới tính") return (
            <RadioButton label={['Nam', 'Nữ']} id={['man', 'woman']} name={"sex"} curValue={curValue} />
        )
        else if (key === "Vai trò") return (
            <RadioButton label={['Người tìm việc', 'Nhà tuyển dụng', 'Admin']} id={['jobSeeker', 'recruiter', 'admin']} name={"role"} curValue={curValue} />
        )

        return <div contentEditable>{curValue}</div>
    })

    return (
        <div className='row'>
            {
                userAccountInfo.slice(1).map( ({key, value} ) => {
                    return (
                        <div>
                            <div className='row mb-4'>
                                <div className='col-sm-4'>{key}</div>
                                <div className='col-sm-8'>
                                    {detectTypeInput(key, value)}
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

function ModalHead({ page, modalType, userAccountInfo }) {

    let title = '';
    if (page === Page.Account) 
    {
        if (modalType === "new") title = "Tạo tài khoản mới";
        else if (modalType === "detai") title = "Thông tin chi tiết của " + userAccountInfo[0].value;
    }
    else if (page === Page.HireRecruiter)
    {
        if (modalType === 'new') title = "Tạo bài đăng tuyển dụng mới";
        else if (modalType === 'detail') title = "Chi tiết tuyển dụng";
    }

    return (
        <div className='modal-header'>
            <h4 className='modal-title'>{title}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
    )
}

function ModalBody({userAccountInfo}) {

    return (
        <div className='modal-body'>
            { userAccountInfo === null ? <></> : <UserAccountModal userAccountInfo={userAccountInfo}/> }
        </div>
    )
}

function ModalFooter() {

    return (
        <div class="modal-footer">
            <button type="button" class="btn btn-primary">Hoàn tất</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
    )
}

export function Modal({page, rowSelected, modalType}) {

    let userAccountInfo = null;
    if (page === Page.Account)
        if (modalType === 'detail') {
            if (rowSelected.length != 0) userAccountInfo = getUserAccountInformation();
        }
        else if (modalType === 'new') userAccountInfo = getUserAccountInformation();
    
    return (
        <div className='modal fade' id="exampleModal">
            <div className='modal-dialog modal-xl modal-dialog-centered'>

                    <div className='modal-content'>

                        <ModalHead page={page} modalType={modalType} userAccountInfo={userAccountInfo}/>
                        <ModalBody userAccountInfo={userAccountInfo}/>
                        <ModalFooter />

                    </div>
            </div>
        </div>
    )
}