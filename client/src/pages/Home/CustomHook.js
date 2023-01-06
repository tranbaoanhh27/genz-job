import React, { useState } from "react";
import { getListAllJob } from "./../../api/Job";

function isSearchText(searchText, job) {
    
    searchText = searchText.toLowerCase();
    if ( Object.values(job).some( (x) => String(x).toLocaleLowerCase().includes(searchText))) 
    {
        return true; 
    }
    if ( Object.keys(job).some( (x) => String(x).toLocaleLowerCase().includes(searchText))) 
    {
        return true;
    }
    return false;
}

export function useGetJobList()
{
    const [listJob, setListJob] = useState([]);

    const searchJob = (searchText) => {

        const resolve = (jobs) => {
                
            jobs = [...listJob, ...jobs];
            if (searchText !== null) {
                setListJob( jobs.filter( isSearchText.bind(null, searchText) ))
            }
            else {
                setListJob( jobs );
            }
        }

        getListAllJob(resolve);
    }

    return [listJob, searchJob];
}