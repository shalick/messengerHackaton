import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    //baseURL: 'http://localhost:54463/api/1.0/',
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "8cb29b96-1ff9-457a-9229-34cee0202934"
    }
});

export const api = {
        getToken() {
            return instance.post(`auth/get-token`);
        }
}