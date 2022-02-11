import axios from "axios";

function myAxios(options) {
    const serve = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })
    return serve(options);
}

export default myAxios;