import React, { useState, useEffect } from "react";
import { Links } from "./Links"
import { TabPersonalInformation } from "./TabPersonalInformation";
import { ListJobStatus } from "./ListJobStatus";
import { ListAccountFollow } from "./ListAccountFollow";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ProfileLocationPrint } from "./../../../Data/Profile"

function MainProfile({ user, viewedUser }) {

    if (!viewedUser) return (
        <div>404 Not Found</div>
    );

    return (
    <section style={{backgroundColor: "var(--background)"}}>
        <div className="container py-5">
    
        <div className="row">
            <div className="col-lg-4">
            <div className="card mb-4">

                <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid" style={{width: "150px"}} />
                <h5 className="my-3">{viewedUser.UserName}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">District 5, Ho Chi Minh City, Viet Nam</p>
                {user.id !== viewedUser.id && <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary" style={{backgroundColor: "var(--primary)"}}>Follow</button>
                    <button type="button" className="btn btn-primary ms-1" backgroundColor="var(--primary)">Message</button>
                </div>}
                </div>
            </div>

            <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                    <Links></Links>
                </div>
            </div>
            </div>

            <div className="col-lg-8">

            <ul className="nav nav-tabs" role = "tablist">
                <li className='nav-item'><a className="nav-link active" data-bs-toggle="tab" href="#personalInfo">Thông tin cá nhân</a></li>
                <li className='nav-item'><a className='nav-link' data-bs-toggle='tab' href="#listFollow">Đang theo dõi ...</a></li>
                <li className='nav-item'><a className='nav-link' data-bs-toggle='tab' href="#listJob">Ứng tuyển</a></li>
            </ul>

            <div className='tab-content'>

                <div className='tab-pane active mt-2' id="personalInfo">
                    <TabPersonalInformation setTitleProfile={setTitleProfile}/>
                </div>
                <ListJobStatus />
                <ListAccountFollow />

            </div>
        </div>
        </div>
        </div>
    </section>
    )
}

export default function Profile({ user }) {

    const [viewedUser, setViewedUser] = useState(undefined);

    let { username } = useParams();
    console.log("username: " + username);
    console.log("current user: " + user.UserName);
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/user/uname/' + username)
            .then(response => {
                if (response.status === 200) {
                    var viewedUser = response.data[0];
                    console.log("Get viewed user");
                    console.log(viewedUser);
                    setViewedUser(viewedUser)
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    });

    return (
        <div classNameName="Profile">
            <MainProfile user={user} viewedUser={viewedUser}/>
        </div>
    )
}
