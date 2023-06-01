import axios from 'axios';

const token = '9p9gmLuFUpvj1tbhoc7E0LjqaqOQ8QZN90R2oXOa';
const language = 'en';
const request = axios.create({
    baseURL: `https://wacapi.hixvm.com/api/v1/${language}/${token}`
});

export default request;