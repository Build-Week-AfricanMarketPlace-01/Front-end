import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://build-week-africanmarketplace1.herokuapp.com/api/users',
        headers: {
            authorization: token
        }
    });
}

export default axiosWithAuth;