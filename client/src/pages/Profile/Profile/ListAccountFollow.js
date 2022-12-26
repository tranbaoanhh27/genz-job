import React, { useEffect, useState } from 'react';
import { listYourFollow } from '../../../Data/Profile';
import ProfileApi from "../../../api/ProfileApi";


function AccountFollowCard( {following, user, listAccountFollow, setListAccountFollow} )
{
    const unfollowHandler = () => {
        ProfileApi.Unfollow(following, user)
            .then(response => {
                setListAccountFollow(listAccountFollow.filter(acc => acc.id !== following.id));
            });
    }

    return (
        <div className="card mb-2">
            <div className='row'>
                <div className='col-sm-9'>
                    <div className='card-body'>
                        <h5 className='card-title'><a href={"/p/"+ following.UserName}>{following.UserName}</a></h5>
                        <p>{following.Email}</p>
                    </div>
                </div>  
                <div className='col-sm-3'>
                    <div className='card-body'>
                        <button className='btn btn-primary' onClick={unfollowHandler}>Bỏ theo dõi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ListAccountFollow({ user }) {

    const [listAccountFollow, setListAccountFollow] = useState([]);

    useEffect( () => {
        ProfileApi.GetUserFollowing(user)
        .then(response => {
            setListAccountFollow( response );
        });
    }, [user.id])

    return (
        <div className="scroll tab-pane mt-2" id="listFollow" style={{maxHeight: "80vh", overflowY: "auto"}}>
            { listAccountFollow.map((following) => <AccountFollowCard following={following} 
                                                                      user={user}
                                                                      listAccountFollow={listAccountFollow}
                                                                      setListAccountFollow={setListAccountFollow}>
                                                                      </AccountFollowCard>) }
        </div>
    )
}