import React, { useState, useEffect } from 'react';

import { ModalAddJobExp } from './ModalJobExp';
import ProfileApi from "../../../api/ProfileApi";
import { ProfileLocationPrint } from "./../../../Data/Profile";

function RowTextInformation( {field, editable, index, viewedUser, setListTextField, listTextField} ) {
    if (field.location !== ProfileLocationPrint.MainText) return; 

    const [title, setTitle] = useState(field.key);
    const [value, setValue] = useState(field.value);

    const AddNewHandler = () => {
        ProfileApi.AddUserProperty(viewedUser, title, value)
        .then(response => {
            var newListTextField = listTextField.map((field, id) =>{
                if (id === index) field.status = 'normal';
                return field;
            });
            setListTextField(newListTextField);       
            alert("Thêm trường thông tin thành công");
        });
    }

    const UpdateHandler = () => {
        ProfileApi.UpdateUserProperty(viewedUser, title, value)
        .then(response => {
            var newListTextField = listTextField.map((field, id) =>{
                if (id === index) field.status = 'normal';
                return field;
            });
            setListTextField(newListTextField);       
            alert("Cập nhật trường thông tin thành công");
        });
    }

    const DeleteHandler = () => {
        console.log(title);
        ProfileApi.DeleteUserProperty(viewedUser, title)
        .then(response => {
            var newListTextField = listTextField.filter((field, id) => id !== index);
            setListTextField(newListTextField);       
            alert("Xóa trường thông tin thành công");
        })
        .catch(error => {
            console.log(error);
            alert("Không thành công");
        });
    }

    const EditHandler = () => {
        var newListTextField = listTextField.map((field, id) =>{
            if (id === index) field.status = 'update';
            return field;
        });
        setListTextField(newListTextField);       
    }

    console.log(editable);
    
    if (field.status && field.status === "new") {
        return (
        <div>
            <div className="row" key={index}>
                <div className="col-sm-2">
                    <input type="text" 
                           class="form-control" placeholder={field.key}
                           onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="col-sm-8">
                    <input type="text" 
                           class="form-control" placeholder={field.value}
                           onChange={e => setValue(e.target.value)}/>
                </div>
                {editable && <div className="col-sm-2">
                    <button type="button" className="btn btn-primary" onClick={AddNewHandler}>Thêm</button>
                </div>}
            </div>
        </div>
        );
    }
    else if (field.status && field.status === "update") {
        return (
            <div>
                <div className="row" key={index}>
                    <div className="col-sm-2">
                        <p>{title}</p> 
                    </div>
                    <div className="col-sm-7">
                        <input type="text" 
                               class="form-control" value={value}
                               onChange={e => setValue(e.target.value)}/>
                    </div>
                    {editable && <div className="col-sm-2">
                        <button type="button" className="btn btn-primary" onClick={UpdateHandler}>Cập nhật</button>
                    </div>}
                </div>
            </div>
            );
    }
    else {
        return (
            <div>
                <div className="row" key={index}>
                    <div className="col-sm-2">
                        <p>{title}</p>
                    </div>
                    <div className="col-sm-7">
                        <p>{value}</p>  
                    </div>
                    {editable && <div className="col-sm-1">
                        <button type="button" className="btn btn-primary" onClick={EditHandler}>Sửa</button>
                    </div>}
                    {editable && <div className="col-sm-1">
                        <button type="button" className="btn btn-primary" onClick={DeleteHandler}>Xóa</button>
                    </div>}
                </div>
            </div>
            );
    }
}

export default RowTextInformation;