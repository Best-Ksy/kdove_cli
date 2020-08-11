import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:8088", // url = base url + request url
    timeout: 5000 // request timeout
})

export default service