import Vue from 'vue'
import server from 'axios'
import qs from 'qs'
// import store from './store.js'
// import router from './router.js'

var axios = server.create({
    timeout: 20000
})
// 请求前
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//响应拦截
axios.interceptors.response.use(response => {
    return response
},error => {
        return Promise.reject(error)
    })

Vue.prototype.$axios = axios
export default axios