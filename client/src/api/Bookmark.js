import axios from "axios";

export function createBookmark(userId, jobId, resolve, reject) {

    let apiUrl = process.env.REACT_APP_API_URL;

    axios.post(apiUrl + `/bookmark/create?userId=${userId}&jobId=${jobId}`, {}).then(resolve).catch(reject);
}

export function isBookmarked(userId, jobId) {   

    console.log(jobId);
    let apiUrl = process.env.REACT_APP_API_URL;

    axios.get(apiUrl + `/bookmark?userId=${userId}`).then( responde => {
        let listJobBookmarked = responde.data;

        return listJobBookmarked.find( (curVal) => {
            return curVal.jobId === jobId;
        })
    }).catch( () => false);
}