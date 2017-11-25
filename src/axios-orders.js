import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bd2fa.firebaseio.com/'
});

export default instance;