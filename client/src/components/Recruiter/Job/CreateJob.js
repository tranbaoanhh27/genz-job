import axios from "axios";
import React, { useImperativeHandle, useRef, useState } from "react";
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
    const companyRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();

    const [validTitle, setValidTitle] = useState(true);
    const [validDescription, setValidDescription] = useState(true);
    const [validSalary, setValidSalary] = useState(true);
    const [validCompany, setValidCompany] = useState(true);
    const [validStartDate, setValidStartDate] = useState(true);
    const [validEndDate, setValidEndDate] = useState(true);

    const createJob = (event) => {
        event.preventDefault();

        // Get entered information
        const enteredJob = {
            title: titleRef.current.returnValue(),
            description: descriptionRef.current.returnValue(),
            salary: salaryRef.current.returnValue(),
            company: companyRef.current.returnValue(),
            datePosted: startDateRef.current.returnValue(),
            closingDate: endDateRef.current.returnValue(),
        };

        // Check valid input
        if (!isValidInput(enteredJob)) return;

        // Get access token and user id
        let user = AuthApi.GetCurrentUser();
        const token = user.accessToken;
        const userId = user.data.id;

        // Call API
        const URL = API_BASE_URL + `/job/${userId}/create`;
        axios.post(URL, enteredJob, { headers: { "x-access-token": token } }).then((response) => {
            console.log(response);

            if (response.status === 200) alert("Tạo tin tuyển dụng thành công!");

            // Reload jobs
            props.onCreateComplete();
        });

        // Close
        props.onCancel();
    };

    const isValidInput = (enteredJob) => {
        let isValid = true;
        let message = "";
        console.log(enteredJob);

        if (!enteredJob) {
            alert("Đã xảy ra lỗi, hãy thử lại!");
            return false;
        }

        if (!enteredJob.title || enteredJob.title.trim().length === 0) {
            setValidTitle(false);
            isValid = false;
            message += "Tiêu đề không được để trống!\n";
        } else setValidTitle(true);

        if (!enteredJob.description || enteredJob.description.trim().length === 0) {
            setValidDescription(false);
            isValid = false;
            message += "Mô tả công việc không được để trống!\n";
        } else setValidDescription(true);

        if (!enteredJob.salary || enteredJob.salary.trim().length === 0) {
            setValidSalary(false);
            isValid = false;
            message += "Mức lương không được để trống!\n";
        } else setValidSalary(true);

        if (enteredJob.salary && enteredJob.salary.trim().length > 0) {
            let salaryNumber = Number.parseInt(enteredJob.salary);
            if (salaryNumber < 0) {
                setValidSalary(false);
                isValid = false;
                message += "Mức lương phải lớn hơn 0\n";
            } else setValidSalary(true);
        }

        if (!enteredJob.company || enteredJob.company.trim().length === 0) {
            setValidCompany(false);
            isValid = false;
            message += "Tên công ty không được để trống!\n";
        } else setValidCompany(true);

        if (!enteredJob.datePosted || enteredJob.datePosted.trim().length === 0) {
            setValidStartDate(false);
            isValid = false;
            message += "Ngày bắt đầu tuyển dụng không được để trống!\n";
        } else setValidStartDate(true);

        if (!enteredJob.closingDate || enteredJob.closingDate.trim().length === 0) {
            setValidEndDate(false);
            isValid = false;
            message += "Ngày kết thúc tuyển dụng không được để trống!\n";
        } else setValidEndDate(true);

        if (
            enteredJob.datePosted &&
            enteredJob.closingDate &&
            enteredJob.datePosted.trim().length > 0 &&
            enteredJob.closingDate.trim().length > 0
        ) {
            let startDate = new Date(enteredJob.datePosted);
            let endDate = new Date(enteredJob.closingDate);
            if (startDate > endDate) {
                setValidEndDate(false);
                setValidStartDate(false);
                isValid = false;
                message += "Ngày bắt đầu tuyển dụng phải nhỏ hơn ngày kết thúc tuyển dụng!\n";
            } else {
                setValidStartDate(true);
                setValidEndDate(true);
            }
        }

        if (message.trim().length > 0) alert(message);
        return isValid;
    };

    return (
        <Card>
            <CenterRow>
                <RecruiterJobImage imageUrl={DEFAULT_IMAGE_URL} />
            </CenterRow>
            <SmallInputField
                isValid={validTitle}
                label="Tên công việc:"
                type="text"
                ref={titleRef}
            />
            <SmallInputField
                isValid={validCompany}
                label="Tên công ty:"
                type="text"
                ref={companyRef}
            />
            <LargeInputField
                isValid={validDescription}
                label="Mô tả công việc:"
                ref={descriptionRef}
            />
            <SmallInputField
                isValid={validSalary}
                label="Mức lương (USD):"
                type="number"
                ref={salaryRef}
                options={{ min: 0, step: 1 }}
            />
            <SpaceBetweenRow style={{ marginTop: "1rem" }}>
                <DateSelect isValid={validStartDate} label="Ngày bắt đầu:" ref={startDateRef} />
                <DateSelect isValid={validEndDate} label="Ngày kết thúc:" ref={endDateRef} />
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
                <NormalInput
                    isValid={props.isValid}
                    type={props.type}
                    ref={input}
                    {...props.options}
                    style={{ flex: 1 }}
                />
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
                <TextAreaInput isValid={props.isValid} ref={input} style={{ flex: 1 }} />
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
            <NormalInput isValid={props.isValid} type="datetime-local" ref={input} />
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
    border: ${(props) => (props.isValid ? "0px" : "2px solid red")};
    border-radius: 10px;
`;

const TextAreaInput = styled.textarea`
    background: ${DarkTheme.input};
    color: ${DarkTheme.text};
    padding-inline: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border: ${(props) => (props.isValid ? "0px" : "2px solid red")};
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
