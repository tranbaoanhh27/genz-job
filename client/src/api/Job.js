import axios from "axios";

export function getListAllJob(resolve, reject) {

    let apiUrl = process.env.REACT_APP_API_URL;

    axios.get(apiUrl + `/job`).then( (jobs) => {
        resolve(jobs.data)
    }).catch(reject);
}