import axios from "axios";
import React, { useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { API_BASE_URL } from "../../../Data/apiConstants";
import { DarkTheme } from "../../../assets/themes";
import MyCard from "../../UI/MyCard";
import RecruiterJobImage from "./JobImage";
import AuthApi from "../../../api/AuthApi";

const CreateJob = (props) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const salaryRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();

    const createJob = (event) => {
        event.preventDefault();

        // Get entered information
        const enteredJob = {
            title: titleRef.current.returnValue(),
            description: descriptionRef.current.returnValue(),
            salary: salaryRef.current.returnValue(),
            datePosted: startDateRef.current.returnValue(),
            closingDate: endDateRef.current.returnValue(),
        };

        // Check valid input?

        // Get access token and user id
        let user = AuthApi.GetCurrentUser();
        const token = user.accessToken;
        const userId = user.data.id;

        // Call API
        const URL = API_BASE_URL + `/job/${userId}/create`;
        axios.post(URL, enteredJob, { headers: { "x-access-token": token } }).then((response) => {
            console.log(response);

            // Reload jobs
            props.onCreateComplete();
        });

        // Close
        props.onCancel();
    };

    return (
        <Card>
            <CenterRow>
                <RecruiterJobImage imageUrl={DEFAULT_IMAGE_URL} />
            </CenterRow>
            <SmallInputField label="Tên công việc:" type="text" ref={titleRef} />
            <LargeInputField label="Mô tả công việc:" ref={descriptionRef} />
            <SmallInputField
                label="Mức lương (USD):"
                type="number"
                ref={salaryRef}
                options={{ min: 0, step: 1 }}
            />
            <SpaceBetweenRow style={{ marginTop: "1rem" }}>
                <DateSelect label="Ngày bắt đầu:" ref={startDateRef} />
                <DateSelect label="Ngày kết thúc:" ref={endDateRef} />
            </SpaceBetweenRow>
            <FlexEndRow
                style={{
                    marginTop: "1rem",
                    position: "absolute",
                    right: "2rem",
                    bottom: "1rem",
                }}>
                <Button className="btn btn-danger" onClick={props.onCancel}>
                    Huỷ
                </Button>
                <Button className="btn btn-success" onClick={createJob}>
                    Tạo tin tuyển dụng
                </Button>
            </FlexEndRow>
        </Card>
    );
};

export default CreateJob;

const SmallInputField = React.forwardRef((props, ref) => {
    const input = useRef();

    useImperativeHandle(ref, () => ({
        returnValue: () => input.current.value,
    }));

    return (
        <div className="row" style={{ marginTop: "1rem" }}>
            <div className="col-2" style={{ textAlign: "start" }}>
                <label>{props.label}</label>
            </div>
            <div className="col-10" style={{ display: "flex" }}>
                <NormalInput type={props.type} ref={input} {...props.options} style={{ flex: 1 }} />
            </div>
        </div>
    );
});

const LargeInputField = React.forwardRef((props, ref) => {
    const input = useRef();

    useImperativeHandle(ref, () => ({
        returnValue: () => input.current.value,
    }));

    return (
        <div className="row" style={{ marginTop: "1rem" }}>
            <div className="col-2" style={{ textAlign: "start" }}>
                <label>{props.label}</label>
            </div>
            <div className="col-10" style={{ display: "flex" }}>
                <TextAreaInput ref={input} style={{ flex: 1 }} />
            </div>
        </div>
    );
});

const DateSelect = React.forwardRef((props, ref) => {
    const input = useRef();

    useImperativeHandle(ref, () => ({
        returnValue: () => input.current.value,
    }));

    return (
        <div style={{ display: "flex", width: "fit-content" }}>
            <label style={{ marginInlineEnd: "4rem" }}>{props.label}</label>
            <NormalInput type="datetime-local" ref={input} />
        </div>
    );
});

const Card = styled(MyCard)`
    margin: 0px;
    background: ${DarkTheme.card};
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`;

const NormalInput = styled.input`
    background: ${DarkTheme.input};
    color: ${DarkTheme.text};
    padding-inline: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border: none;
    border-radius: 10px;
`;

const TextAreaInput = styled.textarea`
    background: ${DarkTheme.input};
    color: ${DarkTheme.text};
    padding-inline: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border: none;
    border-radius: 10px;
    min-height: 5rem;
    max-height: 5rem;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const FlexRow = styled.div`
    display: flex;
`;

const FlexEndRow = styled(FlexRow)`
    justify-content: flex-end;
`;

const CenterRow = styled(FlexRow)`
    justify-content: center;
`;

const SpaceBetweenRow = styled(FlexRow)`
    justify-content: space-between;
`;

const Button = styled.button`
    border-radius: 30px;
    margin-inline: 1rem;
    padding-inline: 1rem;
`;

const DEFAULT_IMAGE_URL =
    "https://raw.githubusercontent.com/theanhbr01/CSC13002/19ba14ee6fcd16d7617890dce4ce510950d1609b/client/src/assets/images/logo.svg";
