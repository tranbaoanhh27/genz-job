import React, { useEffect, useState } from 'react';
import { listYourFollow } from '../../../Data/Profile';

function AccountFollowCard( {following} )
{
    return (
        <div className="card mb-2">
            <div className='row'>
                <div className='col-sm-9'>
                    <div className='card-body'>
                        <h5 className='card-title'>{following.nameAccount}</h5>
                        <p>{following.detail}</p>
                    </div>
                </div>  
                <div className='col-sm-3'>
                    <div className='card-body'>
                        <p className='text-muted'>{following.status}</p>
                        <a href='#' className='btn btn-primary'>Unfollow</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ListAccountFollow() {

    const [listAccountFollow, setListAccountFollow] = useState([]);

    useEffect( () => {
        setListAccountFollow( listYourFollow );
    }, [])

    return (
        <div className="scroll tab-pane mt-2" id="listFollow" style={{maxHeight: "80vh", overflowY: "auto"}}>
            { listYourFollow.map((following) => <AccountFollowCard following={following}></AccountFollowCard>) }
        </div>
    )
}