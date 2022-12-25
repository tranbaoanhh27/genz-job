import axios from 'axios';


class ProfileApi {
    static userApiUrl = process.env.REACT_APP_API_URL + '/user/';
    static followingApiUrl = process.env.REACT_APP_API_URL + '/following';

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

    static IsFollowing(user, follower) {
        return axios.get(this.followingApiUrl + "?userId=" + user.id + "&followerId=" + follower.id);
    }

    static Follow(user, follower) {
        return axios.post(this.followingApiUrl + "/create?userId=" + user.id + "&followerId=" + follower.id);
    }

    static Unfollow(user, follower) {
        return axios.delete(this.followingApiUrl + "/delete?userId=" + user.id + "&followerId=" + follower.id);
    }

    static GetUserFollowing(user) {
        console.log(this.followingApiUrl + "?userId=" + user.id);
        return axios.get(this.followingApiUrl + "?userId=" + user.id)
        .then(response => {
            return response.data.Followee;
        })
    }
}

export default ProfileApi;