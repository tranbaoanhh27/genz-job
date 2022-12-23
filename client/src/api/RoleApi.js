import axios from 'axios';


class RoleApi {

    static assign = (userId, roleTitle) => {
        axios.get(process.env.REACT_APP_API_URL + '/role/getList')
        .then(response => {
            var roles = response.data;
            var roleId = roles[roleTitle];
            const configRole = {
                userId,
                roleId
            }
            axios.post(process.env.REACT_APP_API_URL + '/role/assign', configRole)    
            .then(response => {
                console.log("Assign successfully");
            });
        });

    }
}
export default RoleApi;