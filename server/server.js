const express = require('express')
const request = require('request')
//const {URL_COLLECTION} = require('./constantsUrl')
const app = express()

//配置路由
app.get('/', (req, res) => { 
    res.send('hello world')
})

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 })

 //转发接口
 app.get('/newSong',(req,res)=>{
    console.log(req)
    request('http://m.kugou.com/?json=true', function (error, response, body) {
      res.send(JSON.parse(body));//通过JSON.parse(body) 把字符串格式的json转成对象形式的json
    });
  })

 
 //监听端口 8000
 app.listen(8000,()=>{
     console.log('http://localhost:8000')
 })
