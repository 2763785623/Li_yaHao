/*
    webpack:
        1.打包压缩
        2.语法编译

        webpack 本身使用是node.js 编译， 它可以直接编译 .js文件，但是其他文件不行 需要通过 loader 解析器

*/
import './css/index.css'



import $ from 'jquery'

$(function() {
    $('li').css('color','red');
    $('li').css('background-color','yellow');
    $('li').eq(1).css('color','blue');
    $('li').eq(3).css('color','blue');
    $('li').eq(2).css('color','red');
    $('li').eq(2).css('background-color','red');
    
})