import axios from 'axios'
const local = 'https://drinks-shop-a23d.onrender.com'
const production = ''
const api = axios.create({
    baseURL: `${local}/api`,
    withCredentials : true
})
export default api