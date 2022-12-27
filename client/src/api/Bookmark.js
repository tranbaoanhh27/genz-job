import axios from "axios";

export function createBookmark(userId, jobId, resolve, reject) {

    let apiUrl = process.env.REACT_APP_API_URL;

    axios.post(apiUrl + `/bookmark/create?userId=${userId}&jobId=${jobId}`, {}).then(resolve).catch(reject);
}

export function checkIsBookmarked(userId, jobId, resolve) {   

    let apiUrl = process.env.REACT_APP_API_URL;

    axios.get(apiUrl + `/bookmark?userId=${userId}`).then( (responde) => {
        let listJobBookmarked = responde.data;
        let result = listJobBookmarked.some( (curVal) => {
            return curVal.JobId === jobId;
        })
        resolve(result);
    })
}