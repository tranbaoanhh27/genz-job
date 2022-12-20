import React, { useState, useEffect } from 'react';
import { personalInformation } from '../../../Data/Profile';

function AddMainTextField({ setListTextField }) {

    const addTextField = () => {
        let newField = {key: "Thay đổi tựa đề thông tin", value: "Nhập giá trị thông tin"};
        setListTextField( (prev) => [...prev, newField]);
    }

    return (
        <div>
            <hr />
            <div className="row">
                <div className="col-sm-12 text-center text-primary">
                <p className="mb-0" style={{cursor: "pointer"}} onClickCapture={ addTextField }>Tạo trường thông tin mới</p>
                </div>
            </div>
        </div>
    )
}

function RowTextInformation( {field, index} ) {
    const {key, value} = field;

    return (
        <div>
            <div className="row" key={index}>
                <div className="col-sm-3">
                    <p className="mb-0">{key}</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0" contentEditable="true">{value}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export function TabPersonalInformation() {

    const [listTextField, setListTextField] = useState([]);

    useEffect( () => {
        setListTextField( personalInformation );
    }, []);

    return (
        <div>
            <div className="card mb-4">
                <div className="card-body">
                    { listTextField.map( (field, id) => <RowTextInformation field={field} index={id}></RowTextInformation>) }
                    <AddMainTextField setListTextField={setListTextField} />
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className='card-title text-center'>Tự thuật về bạn</h5>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className='card-title text-center'>Kĩ năng</h5>
                </div>
            </div>
        </div>
    )
}