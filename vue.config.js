// vue 脚手架配置文件，可以用于配置反向代理，解决跨域问题。
module.exports ={
    devServer:{
        proxy:{
            //配置一个代理，匹配url中 有/url 的，一旦匹配到就用反向代理的方式访问这个地址。
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin : true//在本地会创建一个虚拟服务端，然后发送请求的数据
            }
        }
    }
}