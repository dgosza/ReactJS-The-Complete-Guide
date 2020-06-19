import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-e43e6.firebaseio.com/'
})

export default instance;