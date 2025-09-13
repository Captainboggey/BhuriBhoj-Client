import axios from 'axios';
import React from 'react';

const axiosURL = axios.create({
    baseURL: 'http://localhost:4000'
})

const axiosPublic = () => {
    return axiosURL
};

export default axiosPublic;