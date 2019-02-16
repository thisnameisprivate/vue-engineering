<template>
    <div>
        Hello. Info component
        <button @click="add()">提交</button>
    </div>
</template>

<script>
    import store from "@/store";
    export default {
        name: "Info",
        store,
        methods: {
            add () {
                console.log("add Event function !!!");
                store.commit("increase")
            }
        },
    }
</script>

<style scoped>

</style>