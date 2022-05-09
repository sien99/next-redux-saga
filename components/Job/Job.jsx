import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Job.module.css'

const Job = (props) => {
  return (
    <Link href={`/job/${props.job_title}`} >
    <div className={`job-container ${styles.pointer}`} >
    
        <div className="job-header">    
            
            
                <p className="job-header-title" >
                    {props.job_title.slice(0,65)}
                </p>                
            

            <p>
            {   
                isNaN(props.salary_range_from) ? 
                "Not available"
                :
               `${props.salary_range_from/1000}K-${props.salary_range_to/1000}K`
            }
            </p>
        </div>
        <div className="job-body">

            <div className="job-body-1">
                <div className="job-body-1">
                    <img src="https://assets.bossjob.com/website/pin.svg" alt="location" />
                    <p>{props.company_location}</p>
                </div>
                <div>
                    <img src="https://assets.bossjob.com/website/education.svg" alt="location" />
                    <p>{props.degree}</p>  
                </div>

            </div>
            <div className="job-body-2">
                <div>
                    <img src="https://assets.bossjob.com/website/briefcase.svg" alt="experience" />
                    <p>{props.xp_lvl}</p>
                </div>
                <div>
                    <img src="https://assets.bossjob.com/website/clock.svg" alt="type" />
                    <p>{props.job_type}</p>
                </div>

            </div>

            {/* {props.job_location} */}
            {/* "company_location":{props.company_location}, */}
            {/* "job_country":{props.job_country}, */}
        </div>
        <div className="job-footer">
            <img src={props.company_logo} alt="logo" />
            <p>{props.company_name}</p>
        </div>
    </div>
    </Link>
  )
}

export default Job