import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getJob, setJob } from '../../redux/modules/job';

const Main = () => {
    const dispatch = useDispatch();
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        dispatch(getJob());
        // axios.request({
        //     method: 'get',
        //     url: `https://api.bossjob.com/jobs/filter?size=10&query=engineer`,
        // }).then ((res)=>console.log(res))
    }, [dispatch]);
    
    // get job object from job reducer
    const job = useSelector((state) => state.job.job);
    // https://crunchtech.medium.com/object-destructuring-best-practice-in-javascript-9c8794699a0d
    const { jobs } = job?.data || {};

    const getJobList = () => {
        setJobList(jobs.map((job)=>({ 
            'jobId':job.id,
            "degree":job.degree,
            "job_title":job.job_title,
            "job_country":job.job_country,
            "job_type":job.job_type,
            "job_location":job.job_location,
            "salary_range_from":job.salary_range_from,
            "salary_range_to":job.salary_range_to,
            "company_name":job.company_name,
            "company_location":job.company_location,
            "xp_lvl":job.xp_lvl,
        })));
        console.log(jobList)
    }

    console.log(jobs);
    // "jobs": [
    //     {
    //         "id": 17348,
    //         "degree": "Diploma",
    //         "job_title": "System Engineer",
    //         "job_country": "Philippines",
    //         "job_type": "Full-time",
    //         "job_location": "Makati",
    //         "salary_range_from": 30000,
    //         "salary_range_to": 40000,
    //         "company_name": "wealth access inc.",
    //         "company_location": "Makati",
    //         "xp_lvl": "3 - 5 years",
    //     }
    // ],

    return (
        <div>
        <button onClick={getJobList}> Render </button>
        {jobList?.map((job)=>JSON.stringify(job))}
        </div>
    )
}

export default Main