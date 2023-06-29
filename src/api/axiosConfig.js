import axios from 'axios';

export default axios.create({
    baseURL:'https://9c96-103-199-28-23.eu.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});