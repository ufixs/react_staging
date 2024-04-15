const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{
            target:'http://localhost:5000', //被请求的地址
            changeOrigin:true, //控制服务器收到的响应头Host字段的值
            pathRewrite:{'^/api1':''}  //重写请求路径
        }),
        createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),
    )
}
// 优点：可以配置多个代理，可以灵活的控制请求是否走代理