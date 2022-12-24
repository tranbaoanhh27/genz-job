import axios from 'axios';


class RoleApi {

    static async assign(userId, roleTitle) {
        var response = await axios.get(process.env.REACT_APP_API_URL + '/role/getList');
        if (response.status === 200) {
            var roles = response.data;
            var roleId = roles[roleTitle];
            const configRole = {
                userId,
                roleId
            }
            return axios.post(process.env.REACT_APP_API_URL + '/role/assign', configRole);
        };

    }
}
export default RoleApi;