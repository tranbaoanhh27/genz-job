import React, { useState, useEffect } from "react";
import { Links } from "./Links";
import { TabPersonalInformation } from "./TabPersonalInformation";
import { ListJobStatus } from "./ListJobStatus";
import { ListAccountFollow } from "./ListAccountFollow";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileApi from "../../../api/ProfileApi";

function MainProfile({ user, viewedUser }) {
    const [followed, setFollowed] = useState(false);

    let viewedUserId = undefined;
    if (viewedUser) viewedUserId = viewedUser.id;

    useEffect(() => {
        if (viewedUser === undefined) return;
        ProfileApi.IsFollowing(viewedUser, user).then((response) => {
            if (response.data) setFollowed(true);
            else setFollowed(false);
        });
    }, [viewedUser, user]);

    if (!viewedUser) return <div>404 Not Found</div>;

    const followHandler = () => {
        if (followed) {
            ProfileApi.Unfollow(viewedUser, user).then((response) => {
                setFollowed(false);
            });
        } else {
            ProfileApi.Follow(viewedUser, user).then((response) => {
                setFollowed(true);
            });
        }
    };

    return (
        <section style={{ backgroundColor: "var(--background)" }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: "150px" }}
                                />
                                <h5 className="my-3">{viewedUser.UserName}</h5>
                                {/* <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">District 5, Ho Chi Minh City, Viet Nam</p> */}
                                {user && user.id !== viewedUser.id && (
                                    <div className="d-flex justify-content-center mb-2">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{ backgroundColor: "var(--primary)" }}
                                            onClick={followHandler}>
                                            {followed ? "Hủy theo dõi" : "Theo dõi"}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary ms-1"
                                            backgroundColor="var(--primary)">
                                            Nhắn tin
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <Links></Links>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#personalInfo">
                                    Thông tin cá nhân
                                </a>
                            </li>
                            {user && user.id === viewedUser.id && (
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#listFollow">
                                        Đang theo dõi ...
                                    </a>
                                </li>
                            )}
                            {user && user.id === viewedUser.id && (
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#listJob">
                                        Tin đã lưu
                                    </a>
                                </li>
                            )}
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active mt-2" id="personalInfo">
                                <TabPersonalInformation viewedUser={viewedUser} user={user} />
                            </div>
                            {user && user.id === viewedUser.id && <ListJobStatus user={user} />}
                            {user && user.id === viewedUser.id && (
                                <ListAccountFollow viewedUser={viewedUser} user={user} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Profile({ user }) {
    const [viewedUser, setViewedUser] = useState(undefined);

    let { username } = useParams();
    //console.log("username: " + username);
    //console.log("current user: " + user.UserName);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "/user/uname/" + username)
            .then((response) => {
                if (response.status === 200) {
                    var viewedUser = response.data[0];
                    // console.log("Get viewed user");
                    // console.log(viewedUser);
                    setViewedUser(viewedUser);
                }
            })
            .catch((error) => {
                // console.log(error.message);
            });
    }, [username]);

    return (
        <div className="Profile">
            <MainProfile user={user} viewedUser={viewedUser} />
        </div>
    );
}
