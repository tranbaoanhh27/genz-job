import React, { useEffect, useState } from 'react';
import { CardJob } from './CardJob';

function GetMoreJobs(num, listPrevJobs) {

    let numPrevJobs = listPrevJobs.length;
    console.log(numPrevJobs);

    for (let i = numPrevJobs + 1; i <= numPrevJobs + num; i++)
    {
        listPrevJobs.push({
            name: `Công việc #${i}`,
            recruiter: `Công ty #${i}`,
            location: `Địa điểm #${i}`,
            salary: `Mức lương #${i}`,
            numOfExp: `Số năm kinh nghiệm #${i}`,
            lastUpdate: `Cập nhật lần cuối #${i}`,
            closeTime: `Hạn chót ứng tuyển #${i}`
        })
    }

    return listPrevJobs;
}

export function GroupJob({ nameGroup }) {
    
    const [listJob, setListJob] = useState([]);

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
                            <div className='col-sm-6 mt-3'>
                                <CardJob job={value} />
                            </div>
                        )
                    })}
                    
                </div>
                <p className='text-center' onClick={loadMoreJob}><a href='#'>Hiển thị thêm</a></p>
            </div>
        </div>
    )
}