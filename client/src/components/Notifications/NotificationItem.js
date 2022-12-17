import React from "react";
import MyCard from "../UI/MyCard";
import NotificationActions from "./NotificationActions";
import styled from "styled-components";

const Card = styled(MyCard)`
    background: #242526;
    width: 50rem;
`;

const Image = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
`;

const Badge = styled.span`
    border-radius: 5px;
    height: 1rem;
    width: fit-content;
    color: white;
    background: #2e89ff;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpaceBetweenColumn = styled(FlexColumn)`
    justify-content: space-between;
`;

const NotificationItem = (props) => {
    /*  props = {
            notification = {
                id: string
                imageUrl: string,
                content: string,
                nofifyTime: Date,
                readState: string (read or unread)
            }
        }
    */

    const readStateChangeHandler = (newState) => {
        console.log(newState);
        props.onChangeReadState(props.notification.id, newState);
    };

    const removeNotification = () => {
        props.onRemoveItem(props.notification.id);
    };

    console.log(props.notification.readState);
    return (
        <Card>
            <div className="row">
                <div className="col-1">
                    <Image src={props.notification.imageUrl} />
                </div>
                <div className="col align-self-center">
                    <div className="row">
                        <p>{props.notification.content}</p>
                    </div>
                    <div className="row">
                        <label>{props.notification.notifyTime.toLocaleString("vi-VN")}</label>
                    </div>
                </div>
                <SpaceBetweenColumn className="col-1">
                    <NotificationActions
                        readState={props.notification.readState}
                        onChangeReadState={readStateChangeHandler}
                        onRemove={removeNotification}
                    />
                    {props.notification.readState === "unread" && <Badge className="badge">Mới</Badge>}
                </SpaceBetweenColumn>
            </div>
        </Card>
    );
};

export default NotificationItem;
