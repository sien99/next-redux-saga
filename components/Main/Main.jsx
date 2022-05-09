import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from '../../redux/modules/job';
import Job from '../Job/Job';

const Main = () => {
    const dispatch = useDispatch();

    const [jobList, setJobList] = useState([]);
    const [query, setQuery] = useState('');
    const [isSubmit, setIsSubmit] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState({pages:0,num:0});
    
    const queryCache = useRef('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        // user edit query, setSubmit false so will not dispatch query
        setIsSubmit(false);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') getJobList()
    }

    useEffect(() => {
        console.log("Dispatch: ", query);
        if(isSubmit) {
            dispatch(getJob({
                query:query,
                page: page,
            }));

            // reset page when query change
            console.log("queryCache: "+ queryCache.current)
            if(queryCache.current !== query) {
                setPage(1)
                queryCache.current = query
            }
        }
        
    }, [dispatch,isSubmit,page]);

    // get job object from job reducer
    const job = useSelector((state) => state.job.job);
    // display job if change detected in query && query submitted
    useEffect(() => {
        console.log("Rendered: ", page);
        if(isSubmit) getJobList();

    }, [job,page])
    
    const getJobList = () => {
        setIsSubmit(true);
        // https://crunchtech.medium.com/object-destructuring-best-practice-in-javascript-9c8794699a0d
        const { jobs, total_pages, total_num } = job?.data || {
            jobs: [], total_pages: 0, total_num: 0
        }; //! to handle NaN error
        
        setTotalPages({
            pages: Math.min(total_pages,833), //query max at 833
            num: total_num
        });
        setJobList(jobs?.map((job)=>({ 
            // 'jobId':job.id,
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
            "company_logo": job.company_logo,
        })));

        // console.log(jobList)
    };

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
            <div className="search-container">

                <div className="search">
                    <AiOutlineSearch 
                    className="search-icon" onClick={getJobList} />
                    <input
                        type="text" value={query}
                        placeholder="Search for job title or company name"
                        onKeyPress= {handleKeyPress}
                        onChange={handleChange}
                        // onFocus={()=> setIsSubmit(false)}
                    />
                </div>

                <div className="search-filter">
                    <button>
                        Filter results
                    </button>
                </div>
                {/* <button onClick={getJobList}> Search </button>                 */}
            </div>

            <div className="job-outer-container">
                <p className="job-num">{totalPages.num} job results found</p>
                {
                    jobList?.length === 0 ?
                    <p> No jobs found. </p>
                    :
                    jobList?.map((job,idx)=><Job key={idx} {...job}/>)
                }
            </div>
            
            <div className="pagination">
                <FcPrevious 
                    className={page>1? "page-number" : "page-hidden"} 
                    style={{height: "23px"}} 
                    onClick={()=>setPage(prev=>prev-1)}
                />
                {   
                    ([...Array(totalPages?.pages ||0).keys()])
                    .filter((num)=>{
                        if(page<3) return(num>=page-1 && num<=page+4);
                        else return ( num>page-2 || num+1<page+3 );
                    })
                    .map((num,idx)=>{
                        return (
                            <div 
                                className={(page === num+1 ? "disable-page" : "page-number")+((num<page-3 || num>page+(page<3?3:1)) ? " page-hidden" : "" )}
                                key={idx}
                                onClick={()=>{
                                    setPage(num+1);
                                    if(page!==num+1) window.scrollTo(0,0);
                                }}
                            >
                                {num+1}
                            </div>
                        )
                    })                    
                }
                <div 
                    className={page<(totalPages?.pages-3||2) ? "page-number" : "page-hidden"}
                    onClick={()=>{
                        setPage(prev=>Math.min(prev+5,totalPages?.pages));
                    }}
                >
                    ...
                </div>
                <div 
                    className={page<(totalPages?.pages-3||2) ? "page-number" : "page-hidden"} 
                    key={totalPages?.pages}
                    onClick={()=>{
                        setPage(totalPages?.pages);
                    }}
                >
                    {totalPages?.pages}
                </div>
                <FcNext 
                    className={page<(totalPages?.pages) ? "page-number" : "page-hidden"} 
                    style={{height: "23px"}}
                    onClick={()=>setPage(prev=>prev+1)}    
                />
            </div>

        </div>
    )
}

export default Main