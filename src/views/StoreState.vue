<template>
    <div>Hello, StoreState
        <button @click="changeString">修改字符串</button>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "StoreState",
        store,
        methods: {
            changeString () {
                console.log("changeString event function!!! ");
                store.commit('changeString')
            }
        },
    }
</script>

<style scoped>

</style>