import http from "../config"

export default {
     createUser: async(data) => {
        return await http.post('users', data);
    },

    login: async(data) => {
        return await http.post('auth/login', data);
    }  
}