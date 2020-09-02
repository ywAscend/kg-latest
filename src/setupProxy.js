const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        '/api',createProxyMiddleware({
            target:'http://m.kugou.com',
            //target:'http://localhost:8000',
            changeOrigin:true,
            pathRewrite: {
                '^/api': '/'
            }
        })
    )
}