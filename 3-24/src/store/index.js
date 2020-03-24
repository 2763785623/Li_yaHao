//记录vuex配置的文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    //属性  相当于 vue => data
    //定义普通属性
    state: {
        count: 1,
        name: '成龙',
        Number: ''
    },
    // 定义方法
    // mutations 相当于 vue中的 methods
    mutations: {
        changecount(state) {
            state.count += 20;
        },
        changename(state) {
            state.name = '李小龙';
        }
    },
    actions: {
        //也是方法
        actionschangename(context) {
            context.commit('changename')
        }
    },
    // 定义计算属性 
    getters: {
        getStateNumber() {
            return '成龙'
        }
    }
});

export default store;