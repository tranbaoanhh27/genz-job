import axios from 'axios';


class ProfileApi {
    static userApiUrl = process.env.REACT_APP_API_URL + '/user/';
    static followingApiUrl = process.env.REACT_APP_API_URL + '/following';
    static bookmarkApiUrl = process.env.REACT_APP_API_URL + '/bookmark';

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
        let userId = "";
        let followerId = "";
        if (user) 
            userId = user.id;    
        if (follower) 
            followerId = follower.id;        
        return axios.get(this.followingApiUrl + "?userId=" + userId + "&followerId=" + followerId);
    }

    static Follow(user, follower) {
        return axios.post(this.followingApiUrl + "/create?userId=" + user.id + "&followerId=" + follower.id);
    }

    static Unfollow(user, follower) {
        return axios.delete(this.followingApiUrl + "/delete?userId=" + user.id + "&followerId=" + follower.id);
    }

    static GetUserFollowing(user) {
        return axios.get(this.followingApiUrl + "?userId=" + user.id)
        .then(response => {
            return response.data.Followee;
        })
    }

    static GetBookmarkedJobs(user) {
        console.log(this.bookmarkApiUrl + "/list?userId=" + user.id);
        return axios.get(this.bookmarkApiUrl + "/list?userId=" + user.id)
        .then(response => {
            return response.data.Bookmarks;
        })
    }


}

export default ProfileApi;