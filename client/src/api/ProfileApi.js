import axios from 'axios';


class ProfileApi {
    static userApiUrl = process.env.REACT_APP_API_URL + '/user/';

    static AddUserProperty(user, title, value) {
        const config = {
            title,
            value
        }
        console.log(this.userApiUrl + user.id + '/property/new');
        return axios.post(this.userApiUrl + user.id + '/property/new', config);;
    }

    static UpdateUserProperty(user, title, newValue) {
        const config = {
            title,
            newValue
        }
        return axios.put(this.userApiUrl + user.id + '/property/edit', config)
        .then(response => {
            return response.data;
        });
    }

    static DeleteUserProperty(user, title) {
        const config = {
            title
        }
        return axios.delete(this.userApiUrl + user.id + '/property/delete', { data: config })
        .then(response => {
            return response.data;
        });
    }
}

export default ProfileApi;