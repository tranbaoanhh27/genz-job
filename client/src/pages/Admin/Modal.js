import React, { useState, useEffect } from 'react';

export function Modal({ page, row }) {
    
    return (
        <div className='modal-dialog'>

                <div className='modal-content'>

                    <div className='modal-header'>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className='modal-title'>{ `Thông tin chi tiết của ${row[1]}`}</h4>
                    </div>

                    <div className='modal-body'>
                        
                    </div>
                </div>
        </div>
    )
}