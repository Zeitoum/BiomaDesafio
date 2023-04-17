import axios from 'axios';

const eventFetch = axios.create({
    baseURL :" http://localhost:8080/",

});

export default eventFetch;
