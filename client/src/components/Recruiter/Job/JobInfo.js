import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import AuthApi from "../../../api/AuthApi";
import axios from "axios";
import { API_BASE_URL } from "../../../Data/apiConstants";
import YesNoDialog from "../../UI/YesNoDialog";

const RecruiterJobInfo = (props) => {
    const [title, setTitle] = useState(undefined);
    const [company, setCompany] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [salary, setSalary] = useState(undefined);
    const [closeDate, setCloseDate] = useState(undefined);
    const [isRemovingJob, setIsRemovingJob] = useState(false);

    if (!props.job) return;
    if (title === undefined) setTitle(props.job.title);
    if (company === undefined) setCompany(props.job.company);
    if (description === undefined) setDescription(props.job.description);
    if (salary === undefined) setSalary(props.job.salary.toString());
    if (closeDate === undefined) setCloseDate(new Date(props.job.closingDate));

    const jobTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const jobCompanyChangeHandler = (event) => {
        setCompany(event.target.value);
    };

    const jobDescriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const salaryChangeHandler = (event) => {
        setSalary(event.target.value);
    };

    const closeDateChangeHandler = (event) => {
        setCloseDate(new Date(event.target.value));
    };

    const updateInfo = () => {
        // Prepare API body
        let user = AuthApi.GetCurrentUser();
        if (!user) return;
        const accessToken = user.accessToken;
        const body = {
            id: props.job.id,
            authorId: user.data.id,
            title: title,
            company: company,
            description: description,
            salary: salary,
            datePosted: props.job.datePosted,
            closingDate: closeDate,
        };

        // Check if data is valid
        if (!isValidData(body)) return;

        // Call API
        const URL = API_BASE_URL + "/job/edit";
        axios
            .put(URL, body, { headers: { "x-access-token": accessToken } })
            .then((res) => {
                alert("Cập nhật thông tin thành công!");
                props.onUpdated();
            })
            .catch((err) => {
                alert("Cập nhật thông tin thất bại, hãy thử lại sau");
            });
    };

    const isValidData = (job) => {
        if (!job) return false;

        if (!job.title || job.title.trim().length === 0) {
            alert("Không được để trống tiêu đề tin tuyển dụng!");
            return false;
        }

        if (!job.company || job.company.trim().length === 0) {
            alert("Không được để trống tên công ty!");
            return false;
        }

        if (!job.salary || job.salary.trim().length === 0) {
            alert("Không được để trống mức lương!");
            return false;
        } else {
            let salaryNumber = Number.parseInt(job.salary);
            if (salaryNumber < 0) {
                alert("Mức lương không được nhỏ hơn 0");
                return false;
            }
        }

        if (!job.closingDate || job.closingDate.toUTCString().trim() === "Invalid Date") {
            alert("Không được để trống ngày kết thúc tuyển dụng!");
            return false;
        } else {
            let startDate = new Date(props.job.datePosted);
            if (job.closingDate < startDate) {
                alert(
                    `Tin tuyển dụng này được tạo vào ${startDate.toLocaleString(
                        "vi-VN"
                    )}, do đó ngày kết thúc tuyển dụng không được trước ${startDate.toLocaleString("vi-VN")}`
                );
                return false;
            }
        }

        if (!job.description || job.description.trim().length === 0) {
            alert("Không được để trống mô tả công việc!");
            return false;
        }

        return true;
    };

    const removeThisJob = () => {
        // Call API to remove this job
        const URL = `${API_BASE_URL}/job/delete?jobId=${props.job.id}`;
        axios
            .delete(URL)
            .then((res) => {
                if (res.status === 200) {
                    alert(`Đã xóa tin tuyển dụng ${title} thành công!`);
                    setIsRemovingJob(false);
                    props.onUpdated();
                }
            })
            .catch((err) => {
                alert(`Xóa tin tuyển dụng ${title} không thành công!\nHãy thử lại sau`);
            });
    };

    return (
        <>
            {isRemovingJob && (
                <YesNoDialog
                    title="Xác nhận xóa tin tuyển dụng"
                    message={`Bạn có chắc chắn bạn muốn xóa tin tuyển dụng ${title}`}
                    onNo={() => setIsRemovingJob(false)}
                    onYes={removeThisJob}
                />
            )}
            <FlexColumn className={`${props.className}`}>
                <div className="row">
                    <JobInfoLabel className="col-3">Tiêu đề:</JobInfoLabel>
                    <JobInfoInput className="col" type="text" value={title} onChange={jobTitleChangeHandler} />
                </div>
                <div className="row" style={{ marginTop: "0.75rem" }}>
                    <JobInfoLabel className="col-3">Công ty:</JobInfoLabel>
                    <JobInfoInput className="col" type="text" value={company} onChange={jobCompanyChangeHandler} />
                </div>
                <div className="row" style={{ marginTop: "0.75rem" }}>
                    <JobInfoLabel className="col-3">{"Mức lương ($):"}</JobInfoLabel>
                    <JobInfoInput className="col" type="number" value={salary} onChange={salaryChangeHandler} />
                </div>
                <div className="row" style={{ marginTop: "0.75rem" }}>
                    <JobInfoLabel className="col-3">Ngày kết thúc:</JobInfoLabel>
                    <JobInfoInput
                        className="col"
                        type="datetime-local"
                        value={moment(closeDate).format("yyyy-MM-DDThh:mm:ss")}
                        onChange={closeDateChangeHandler}
                    />
                </div>
                <div className="row" style={{ marginTop: "0.75rem", flex: "1" }}>
                    <JobInfoLabel className="col-3">Mô tả công việc:</JobInfoLabel>
                    <JobInfoTextArea className="col" value={description} onChange={jobDescriptionChangeHandler} />
                </div>
            </FlexColumn>
            <ButtonContainer>
                <Button
                    type="button"
                    className="btn btn-danger"
                    style={{ marginInlineEnd: "2rem" }}
                    onClick={() => setIsRemovingJob(true)}>
                    Xóa tin tuyển dụng này
                </Button>
                <Button type="button" className="btn btn-success" onClick={updateInfo}>
                    Lưu các chỉnh sửa
                </Button>
            </ButtonContainer>
        </>
    );
};

export default RecruiterJobInfo;

// Styled Components
const JobInfoLabel = styled.label`
    text-align: start;
`;

const JobInfoInput = styled.input`
    background: #3a3b3c;
    color: white;
    border: none;
    border-radius: 5px;
`;

const JobInfoTextArea = styled.textarea`
    background: #3a3b3c;
    color: white;
    border: none;
    border-radius: 5px;
    min-height: 7rem;
    max-height: 7rem;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-end;
    height: fit-content;
`;

const Button = styled.button`
    border-radius: 30px;
    padding-inline: 2rem;
    height: fit-content;
`;
