import React, { useState, useEffect } from 'react';

import { ModalAddJobExp } from './ModalJobExp';

import { personalInformation } from '../../../Data/Profile';
import { ProfileLocationPrint } from "./../../../Data/Profile"

function AddMainTextField({ setListTextField }) {
    const addTextField = () => {
        let newField = {
            key: "Thay đổi tựa đề thông tin",
            value: "Nhập giá trị thông tin", 
            canEdit: "all",
            location: ProfileLocationPrint.MainText
        };
        setListTextField( (prev) => [...prev, newField]);
    }

    return (
        <div>
            <hr />
            <div className="row">
                <div className="col-sm-12 text-center text-primary">
                    <p className="mb-0" style={{ cursor: "pointer" }} onClickCapture={addTextField}>
                        Tạo trường thông tin mới
                    </p>
                </div>
            </div>
        </div>
    );
}

function RowTextInformation( {field, index} ) {

    if (field.location !== ProfileLocationPrint.MainText) return; else
    return (
        <div>
            <div className="row" key={index}>
                <div className="col-sm-3">
                    <p className="mb-0" contentEditable={field.canEdit === "all" ? "true" : "false"}>{field.key}</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0" contentEditable={field.canEdit !== "no" ? "true" : "false"}>{field.value}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

function AddJobExp() {

    return (
        <div className='row'>
            <div className="col-sm-12 text-center text-primary">
                <p className='mb-0' style={{cursor: "pointer"}}>
                    <a href='#' data-bs-toggle="modal" data-bs-target="#modalAddJobExp" style={{textDecoration: "none"}}>Thêm công việc đang bạn đang làm</a>
                </p>
            </div>
        </div>
    )
}

function JobExperience() {
    
    const [listJobExp, setListJobExp] = useState([]);

    useEffect( () => {
        setListJobExp([]);
    }, []);

    if (listJobExp.length === 0) return (
        <div>
            <p>Loading...</p>
            <AddJobExp />
        </div>
    )
    else

    return (
        <div>
                { listJobExp.map( (value, id) => {
                    return (
                        <div>
                            <div className='row' key={value.value}>
                                <div className="col-sm-9">
                                    <p className='mb-0'>{value.company}</p>
                                </div>
                                <div className='col-sm-3'>
                                    <p className='mb-0'>{value.time}</p>
                                </div>
                            </div>
                            <hr />
                            <AddJobExp />
                        </div>
                    )
                })}
        </div>
    )
}

export function TabPersonalInformation({ setTitleProfile }) {

    const [listTextField, setListTextField] = useState([]);

    useEffect(() => {
        setListTextField(personalInformation);
    }, []);

    if (listTextField.length === 0) return <p>Loading</p>; else

    return (
        <div>
            { setTitleProfile( listTextField.find(x => x.key === "Title").value) }
            <div className="card mb-4">
                <div className="card-body">
                    {listTextField.map((field, id) => (
                        <RowTextInformation field={field} index={id}></RowTextInformation>
                    ))}
                    <AddMainTextField setListTextField={setListTextField} />
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title text-center">Tự thuật về bạn</h5>
                    <form>
                        <div className='form-group'>
                            <textarea className='form-control mt-3' rows="3">{listTextField.find( x => x.location === ProfileLocationPrint.AboutYou ).value}</textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className='card-title text-center'>Kinh nghiệm công việc</h5>
                    <JobExperience />
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className='card-title text-center'>Kĩ năng</h5>
                </div>
            </div>

            <ModalAddJobExp />
        </div>
    );
}
