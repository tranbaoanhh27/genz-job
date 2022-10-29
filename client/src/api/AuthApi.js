import axios from 'axios';


class AuthApi {
    static apiUrl = process.env.REACT_APP_API_URL + '/authentication/';

    Login(userName, password) {
        const config = {
            userName,
            password
        }
        return axios.post(this.apiUrl + 'login', config)
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    Logout() {
        localStorage.removeItem("user");
    }

    Signup(userName, email, password) {
        const config = { 
            userName,
            email,
            password
        };

        return axios.post(this.apiUrl + "signup", config);
    }

    GetCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthApi();