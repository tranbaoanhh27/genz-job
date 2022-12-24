import React, { useState, useEffect } from 'react';

export function ModalAddJobExp() {

    return (
        <div>
            <div className='modal fade' id="modalAddJobExp" role="dialog">
                <div className='modal-dialog modal-xl modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Thêm vị trí công việc</h5>
                            <button type="button" className='btn-close' data-bs-dismiss="modal"></button>
                        </div>

                        <div className='modal-body'>

                        </div>

                        <div className='modal-footer'>
                            <button type="button" className='btn btn-primary'>Thêm công việc</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}