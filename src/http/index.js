import axios from 'axios'

//先暴露一个简单的请求接口，后续再封装

const fetch = param =>  axios(param)

export default fetch