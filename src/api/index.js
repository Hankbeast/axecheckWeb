import httpService from "../request/index"
import axios from 'axios'

export const getReq = (api,params) => {
    return httpService({
        url: api,
        method: 'get',
        params: params
    })
}

export const  postJson = (api, data) => {
    return httpService({
        url: api,
        method: 'post',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        data: data
    })
}

export const posrForm = (api ,data) => {
    return httpService({
        url: api,
        method: 'post',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data: data,
        transformRequest:[ function (data) {
            let ret = ''
            for (let it in data) {
               ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            ret = ret.substring(0, ret.lastIndexOf('&'));
            return ret
         }]
    })
}

export const download = (api, params, fileName) => {
    axios({
        // url: 'https://api.sws010.com/manage'+api,
        method: "post",
        data: params,
        headers: {
            "admin-token": '',
        },
        responseType: "blob"
      })
      .then((response) => {
        let data = response.data
        const blob = new Blob([data])
        const a = document.createElement('a')
        if (!fileName) {
          let contentDisposition = response.headers['content-disposition'];
          if (contentDisposition) {
            fileName = window.decodeURI(response.headers['content-disposition'].split('=')[1], "UTF-8");
          } else {
            fileName = "default.xlsx"
          }
        }
        a.download = fileName
        a.style.display = 'none'
        a.href = URL.createObjectURL(blob)
        document.body.appendChild(a)
        a.click()
        URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      })
}

