<template>
    <div>
        <p>lists....</p>
        <p>{{ this.$store.state.name }}</p>
        <p>{{ mycount }}</p>
        <p>{{ myname }}</p>

        <button @click="mychangecount()">点击修改数据 </button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: '',
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations({
            mychangecount:'changecount'
        })
    },
    computed: {
        ...mapState({
            mycount:state=>state.count,
            myname:state=>state.name
        })
    }
}
</script>

<style scoped>

</style>