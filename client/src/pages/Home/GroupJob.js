import React, { useEffect, useState } from "react";
import { CardJob } from "./CardJob";
import { useGetJobList } from "./CustomHook";

function GetMoreJobs(num, listPrevJobs) {
    let numPrevJobs = listPrevJobs.length;
    // console.log(numPrevJobs);

    for (let i = numPrevJobs + 1; i <= numPrevJobs + num; i++) {
        listPrevJobs.push({
            idJob: i,
            name: `Đây là một tên công việc dài thứ #${i} để kiểm tra việc hiển thị`,
            recruiter: `Đây là một tên công ty dài thứ #${i} để kiểm tra việc hiển thị khi bị overflow`,
            location: `Địa điểm #${i}`,
            salary: `Mức lương #${i}`,
            numOfExp: `Số năm kinh nghiệm #${i}`,
            lastUpdate: `Cập nhật lần cuối #${i}`,
            closeTime: `Hạn chót ứng tuyển #${i}`,
            isBookmarked: false,
        });
    }

    return listPrevJobs;
}

export function GroupJob({ groupJob: { nameGroup, searchText, listFilter } }) {
    const [listJob, searchJob] = useGetJobList();
    const [numShowedJob, setNumShowedJob] = useState(3);

    // Retrieve all job in the database when mount (first rendering)
    useEffect(() => {
        searchJob(searchText);
    }, []);

    const loadMoreJob = () => {
        setNumShowedJob((prev) => prev + 5);
    };

    if (listJob.length === 0)
        return (
            <div className="card mb-5">
                <div className="card-body">
                    <h5 className="card-title mb-4">{nameGroup}</h5>
                    <p>Đang tải dữ liệu...</p>
                </div>
            </div>
        );
    else
        return (
            <div className="card mb-5">
                <div className="card-body">
                    <h5 className="card-title mb-4">{nameGroup}</h5>
                    <div className="row mb-5">
                        {listJob.slice(0, numShowedJob).map((value, id) => {
                            return (
                                <div className="col-sm-6 mt-3" style={{ height: "17em" }}>
                                    <CardJob job={value} listJob={listJob} />
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-center" onClick={loadMoreJob}>
                        <a href="#">Hiển thị thêm</a>
                    </p>
                </div>
            </div>
        );
}
