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
    );
    app.use(
        '/searinfo',createProxyMiddleware({
            target:'http://mobilecdn.kugou.com',
            changeOrigin:true,
            pathRewrite: {
                '^/searinfo': '/'
            }
        })
    )
}