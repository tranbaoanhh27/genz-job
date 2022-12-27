import React, { useEffect, useState } from 'react';
import { CardJob } from './CardJob';
import { getListAllJob } from '../../api/Job';

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

export function GroupJob( { groupJob: { nameGroup, searchText, listFilter }} ) {
    
    const [listJob, setListJob] = useState([]);
    const [numShowedJob, setNumShowedJob] = useState(3);

    const isSearchText = (searchText) => {
        
        return function(object) {
            let searchText = searchText.toLowerCase();
            if ( Object.values(object).some( x => x.includes(searchText))) return true; 
            if ( Object.keys(object).some( x => x.includes(searchText))) return true;
            return false;
        }
    }

    useEffect( () => {

        const resolve = (jobs) => {
            setListJob([...listJob, ...jobs]);

            // Search job
            if (searchText !== null) setListJob( listJob.filter( isSearchText(searchText) ))
        }
        getListAllJob(resolve);
    }, [])

    const loadMoreJob = () => {
        setNumShowedJob( (prev) => prev + 5);  
    }

    if (listJob.length === 0) return (
        <div className='card mb-5'>
            <div className='card-body'>
                <h5 className='card-title mb-4'>{nameGroup}</h5>
                <p>Đang tải dữ liệu...</p>
            </div>
        </div>
    )
    else return (
        <div className='card mb-5'>
            <div className='card-body'>
                <h5 className='card-title mb-4'>{nameGroup}</h5>
                <div className='row mb-5'>

                    {listJob.slice(0, numShowedJob).map( (value, id) => {
                        return (
                            <div className='col-sm-6 mt-3' style={{height: "17em"}}>
                                <CardJob job={value} listJob={listJob} setListJob={setListJob}/>
                            </div>
                        )
                    })}
                    
                </div>
                <p className='text-center' onClick={loadMoreJob}><a href='#'>Hiển thị thêm</a></p>
            </div>

        </div>
    )
}