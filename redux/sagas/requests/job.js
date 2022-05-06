import axios from 'axios';

export function requestGetJobs (query) {
    query = "engineer"
    return axios.request({
        method: 'get',
        url: `https://api.bossjob.com/jobs/filter?size=10&query=${query}`,
    });
};

// `https://api.bossjob.com/jobs/filter?size=10&query=`

// ```
// size - to specify number of jobs to be retrieved (default is 4)
// query - to specify which job title / company name to be retrieved
// page - to specify the page to be retrieved