const path = require('path');//node.js 中的一个内置的模块 path
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');
//node.js 中的模块化 相当于 es6 中的模块化 作用一样的
module.exports = {
    //设置入口  打包的是那个文件
    entry: './src/main.js',

    //设置出口
    output: {
        path: path.resolve(__dirname,'dist'), //当前打包的文件夹
        filename: 'bundle.js',//打包文件的名称
    },
    devServer: {
        contentBase: 'src',
        open: true,
        port: 2000,
        hot:true
    },
    //所有的插件配置
    plugins: [
        //启动热加载
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({
            template:path.join(__dirname,'./src/index.html'),//文件保存路径
            filename:'index.html',//生成以后的html文件名称
        })
    ],
    //webpack中怎么使用 loader
    module: {
        rules: [
            {text: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }

}