import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL + '/authentication/';

class  AuthApi {
    Login(userName, password) {
        const config = {
            userName,
            password
        }
        return axios.post(apiUrl + 'login', config)
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

        return axios.post(apiUrl + "signup", config);
    }

    GetCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthApi();