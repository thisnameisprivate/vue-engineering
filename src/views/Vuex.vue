<template>
    <div>
        Hello. Vuex component
        <button @click="addEvent()">提交</button>
    </div>
</template>

<script>
    import store from "@/store"
    export default {
        name: "Vuex",
        store,
        methods: {
            addEvent () {
                console.log("addEvent function !!!");
                store.commit("addEventConf")
            }
        },

    }
</script>

<style scoped>

</style>