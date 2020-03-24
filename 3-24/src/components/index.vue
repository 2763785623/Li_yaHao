<template>
  <div>
      <p>index....</p>
      <p>vuex: 数据 {{ this.$store.state }}</p>

      <button @click="changeAdd()">点击修改count + 20</button>
      <button @click="changeName()">点击修改name名</button>

      <p>这是Number的值: {{ this.$store.getters.getStateNumber }}</p>
  
  </div>
</template>

<script>
export default {
    data() {
        return {
            a: ''
        }
    },
    methods: {
        changeAdd() {
            // console.log(this.$store)
            //调用vuex中方法 使用 commit
            this.$store.commit('changecount')
        },
        changeName() {
            //commit 直接触发 changename
            //this.$store.commit('changename')
        
            //dispatch 触发 actions 中方法 (vuex地层中可以对 数据进行 监听)
            this.$store.dispatch('actionschangename')
        }
    },
    mounted() {
        this.a = this.$store.state;
        
    }
}
</script>

<style scoped>

</style>