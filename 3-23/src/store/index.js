//记录vuex配置的文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    //属性  相当于 vue => data
    state: {
        count: 1,
    }
});

export default store;