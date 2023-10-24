import axios from "axios"
//创建axios的实例
const httpService = axios.create({
    baseURL: '',// TODO:具体的配置可以根据项目情况而来
    timeout: 5000
})
httpService.interceptors.request.use(config => {
    // config.headers['Content-Type'] = "application/json";
    // config.headers['admin-token'] = '';
    // config.headers['device-type'] = "web";
	return config
}, err => {
	return Promise.reject(err)
})

httpService.interceptors.response.use(response => {
    let msg = '';
    let data = null;
    let res = response.data;
    if(res.code === 200){
        data = res.data;
        msg = res.msg || "";
        // return {data, msg};
        return res;
    } else {
        msg = res.msg || "";
        // return Promise.reject(new Error(msg))
        return res;
    }
}, err => {
    // console.log(err)
	// TODO:具体的code对应的处理可继续添加修改
    return Promise.reject(err);
})

export default httpService





