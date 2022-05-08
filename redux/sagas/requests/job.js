import axios from 'axios';

export function requestGetJobs (queryAtReducer) {
    // console.log(query)
    // if(query.length===0) query = "null";
    console.log(queryAtReducer)
    const size = 12;
    let {query, page} = queryAtReducer || {'query': query || null, 'page':1};
    query = encodeURIComponent(query);
    const url = `https://api.bossjob.com/jobs/filter?size=${size}&page=${page}&query=${query}`;
    console.log(url);
    return axios.request({
        method: 'get',
        url: url,
    });
};

// `https://api.bossjob.com/jobs/filter?size=10&query=`

// ```
// size - to specify number of jobs to be retrieved (default is 4)
// query - to specify which job title / company name to be retrieved
// page - to specify the page to be retrieved