# Bossjob Frontend Test

## Instruction
Please implement the job list page as per design (job-list-design.jpg). 
Please use this git repository as a starter kit. This has been created using [Next.js](https://nextjs.org/), project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

Node Version: v16.0.0

**UI library is strongly discouraged**.

The app should have/be able to do the following:
1. Listing of the first 12 jobs
2. Able to search for job by title or company name
3. Clicking on each job navigates user to `/job/{job-title}` page (You may leave the UI of this page blank).
4. Fetch data using redux-saga
5. Pagination 

*Additional points for the following implementations:* 
- Typescript 
- File/code structures
- Anything you would like to showcase, impress us with your skills :) 

<br/>

## API Endpoint
Please use this provided api to retrieve the job list. 
`https://api.bossjob.com/job/api/v1/jobs/filter?size=10&query=`

```
size - to specify number of jobs to be retrieved (default is 4)
query - to specify which job title / company name to be retrieved
page - to specify the page to be retrieved

```
------

Below will be the necessary key that you will use from the JSON response

```
{
    "message": "OK",
    "data": {
        "jobs": [
            {
                "id": 17348,
                "degree": "Diploma",
                "job_title": "System Engineer",
                "job_country": "Philippines",
                "job_type": "Full-time",
                "job_location": "Makati",
                "salary_range_from": 30000,
                "salary_range_to": 40000,
                "company_name": "wealth access inc.",
                "company_location": "Makati",
                "xp_lvl": "3 - 5 years",
            }
        ],
        "page": 1,
        "size": 10,
        "total_num": 265,
        "sort": 1

    }
}
```

You could ignore the rest of the keys.

## Other Resources  
*Icons:* <br/>
https://assets.bossjob.com/website/pin.svg
https://assets.bossjob.com/website/briefcase.svg
https://assets.bossjob.com/website/education.svg
https://assets.bossjob.com/website/clock.svg

*Redux Saga:* <br/>
https://github.com/kirill-konshin/next-redux-wrapper

<br/>

## All the best & have fun ! 
