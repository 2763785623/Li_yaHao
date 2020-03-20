<template>
    <div>
        <button @click='gets()'>点击发送--get方式</button>
        <button @click='jsonp()'>点击发送ajax -- 设置本地api,解决跨域 -- get</button>
        <button @click='jsonp2()'>点击发送ajax -- 设置本地api,解决跨域 -- post</button>
    </div>
</template>

<script>

import qs from 'qs'
export default {
    name: '',
    data() {
        return {
            url1: '允许跨域网址:id=10&age=18',
            url2: '允许跨域网址',
            url3: '不允许跨域网址'
        }
    },
    methods: {
        //第一种get方式
        gets() {
            this.$axios.get(this.url1).then(res => {
                console.log('加载成功');
            }).catch(err => {
                console.log('加载失败');
            })
        },
        //第二种get方式
        // gets() {
        //     this.$axios.get(this.url2,{
        //         params: {id: 10,name: '李四'}
        //     }).then(res => {
        //         console.log('加载成功');
        //     }).catch(err => {
        //         console.log('加载失败');
        //     })
        // },
        jsonp() {
            this.$axios.get('/api/get请求文件',{params: {id: 10,name: '李四'}}).then(res => {
                console.log(res);
            })
        },
        jsonp2() {
            //使用qs 组件 对发送的数据进行加密处理
            const data = qs.stringify({uname: 'Li_yaHao@qq.com',upass: '123456789'})
            
             this.$axios.post('/api/post请求文件',data).then(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>