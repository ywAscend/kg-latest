import axios from 'axios'
import { message } from 'antd'
import { ShowLoading, HideLoding } from '../components/loading'

class Http {
    constructor() {
        console.log(process.env)
        this.$http = axios.create()
        this.$http.defaults.timeout = 10000
        this.$http.defaults.baseURL = process.env.KG_API_URL ||''
        this.$http.defaults.headers = {
            "Content-Type": 'application/json;charset=UTF-8',
            //"Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
        }
        //this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        this.requestCount = 0 //请求次数
        this.useInterceptRequest()
        this.useInterceptResponse()
    }

    //显示遮罩
    showLoading = () => {
        if (this.requestCount === 0) {
            ShowLoading()
        }
        this.requestCount++
    }
    //隐藏遮罩
    hideLoding = () => {
        this.requestCount--
        if (this.requestCount === 0) {
            HideLoding()
        }
    }


    //请求拦截
    useInterceptRequest = () => {
        this.$http.interceptors.request.use((config) => {
            this.showLoading()
            //对配置进行拦截，比如添加token
            const newConfig = config
            //模拟 获取token
            const token = ''

            if (token) newConfig.headers.authtoken = token

            //处理其他需求
            // ...

            //返回配置
            return newConfig
        }, (error) => {

            this.hideLoding()

            Promise.reject(error)
        })
    }

    //响应拦截器
    useInterceptResponse = () => {
        this.$http.interceptors.response.use(res => {
            this.hideLoding()
            
            //服务器状态码处理
            if (res.status === '500') {
                message.error(res.data.error.message || '服务器异常')
            }

            //返回数据
            return Promise.resolve(res.data)
        }, error => {
            this.hideLoding()
            
            return Promise.reject(error)
        })
    }

    //封装底层公用请求方法
    /**
     * type: 请求类型
     * url:请求地址
     * options: 参数
     */
    fetchData = (type, url, options) => {
        return this.$http[type](url, options)
    }

    //封装get方法
    get = (url, params) => {
        // get 可以不传参数
        if (!params) return this.fetchData('get', url);
        // get请求，很有可能会被缓存，加一个随机参数，防止缓存
        const newParams = Object.assign(params, {
            [`kg${new Date().getTime()}`]: 1,
        });

        return this.fetchData('get', url, { params: newParams });
    }

    //封装 post put delete

    //封装post、put、delete一个公共方法
    commonRequestFn = (type, url, params, data) => {
        //合并参数
        let options = { params, data }

        if (params && data === undefined) {
            options = {
                data: params,
            }
        }
        if (data === null) {
            options = {
                params,
            }
        }
       return this.fetchData(type, url, options)
    }

    //post请求
    /*
   * post请求
   * url --- 地址
   * params --- 请求的url上加参数 比如?action=123
   * data --- 请求体 body 内的数据
   * {a, b}
   * */
    post = (url, params, data) => {
        return this.commonRequestFn('post', url, params, data)
    }

    /*
    * put 请求
    * params --- 请求的url上加参数 比如?action=123
    * data --- 请求体 body 内的数据
    * */
    put = (url, params, data) => {
        return this.commonRequest('put', url, params, data);
    }

    // patch
    patch = (url, params, data) => {
        return this.commonRequest('patch', url, params, data);
    }

    // delete
    delete = (url, params, data) => {
        return this.commonRequest('delete', url, params, data);
    }

}

export default new Http()