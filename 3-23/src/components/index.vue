<template>
  <div>
      <p>index....</p>
      <p>vuex: 数据 {{ this.$store.state }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            a: ''
        }
    },
    mounted() {
        this.a = this.$store.state
    }
}
</script>

<style scoped>

</style>