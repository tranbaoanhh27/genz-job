import React, { useState } from 'react';
import { CardJob } from './CardJob';

export function GroupJob({ nameGroup }) {
    
    return (
        <div className='card mb-5'>
            <div className='card-body'>
                <h5 className='card-title mb-4'>{nameGroup}</h5>
                <div className='row'>

                    <div className='col-md-6'>
                        <CardJob nameJob = "Job 1"/>
                    </div>
                    <div className='col-md-6'>
                        <CardJob nameJob = "Job 2"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}