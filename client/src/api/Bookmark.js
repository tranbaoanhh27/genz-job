import axios from "axios";

export function createBookmark(userId, jobId) {

    let apiUrl = process.env.REACT_APP_API_URL;
    let result;
    let error = null;

    axios.post(apiUrl + `/bookmark/create?userId=${userId}&jobId=${jobId}`, {}).then( (response) => {console.log(response); result = response; }).catch( er => { error = er; });

    return [result, error];
}