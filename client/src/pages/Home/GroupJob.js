import React, { useEffect, useState } from 'react';
import { CardJob } from './CardJob';
import { Alert } from './Alert';

function GetMoreJobs(num, listPrevJobs) {

    let numPrevJobs = listPrevJobs.length;
    console.log(numPrevJobs);

    for (let i = numPrevJobs + 1; i <= numPrevJobs + num; i++)
    {
        listPrevJobs.push({
            idJob: i,
            name: `Đây là một tên công việc dài thứ #${i} để kiểm tra việc hiển thị`,
            recruiter: `Đây là một tên công ty dài thứ #${i} để kiểm tra việc hiển thị khi bị overflow`,
            location: `Địa điểm #${i}`,
            salary: `Mức lương #${i}`,
            numOfExp: `Số năm kinh nghiệm #${i}`,
            lastUpdate: `Cập nhật lần cuối #${i}`,
            closeTime: `Hạn chót ứng tuyển #${i}`,
            isBookmarked: false
        })
    }

    return listPrevJobs;
}

export function GroupJob({ nameGroup }) {
    
    const [listJob, setListJob] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect( () => {
        let listPrevJobs = listJob;
        GetMoreJobs(5, listPrevJobs);
        setListJob([...listPrevJobs]);   
    }, [])

    const loadMoreJob = () => {
        let listPrevJobs = listJob;
        console.log("hi");
        GetMoreJobs(5, listPrevJobs);
        setListJob([...listPrevJobs]);   
    }

    if (listJob.length === 0) return <p>Đang tải!</p>; else
    return (
        <div className='card mb-5'>
            <div className='card-body'>
                <h5 className='card-title mb-4'>{nameGroup}</h5>
                <div className='row mb-5'>

                    {listJob.map( (value, id) => {
                        return (
                            <div className='col-sm-6 mt-3' style={{height: "17em"}}>
                                <CardJob job={value} listJob={listJob} setListJob={setListJob} setAlert={setAlert}/>
                            </div>
                        )
                    })}
                    
                </div>
                <p className='text-center' onClick={loadMoreJob}><a href='#'>Hiển thị thêm</a></p>
            </div>

            {alert === null ? <></> : <Alert classAlert={alert.classAlert} info={alert.info} setAlert={setAlert}/>}
        </div>
    )
}