import axios from 'axios';


class AuthApi {
    static apiUrl = process.env.REACT_APP_API_URL + '/authentication/';

    static Login(userName, password) {
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

    static Logout() {
        localStorage.removeItem("user");
    }

    static Signup(userName, email, password, role) {
        const config = { 
            userName,
            email,
            password
        };
        
        return axios.post(this.apiUrl + "signup", config)
    }

    static GetCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default AuthApi;