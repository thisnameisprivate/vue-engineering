<template>
    <div>
        <ul>
            <li v-for="(item, index) in lists"
                :class="{active: current == index && current !== ''}"
                @click="active(index)"
                :key="index">
                {{ item }}
            </li>
        </ul>
        <button type="button" @click="addNumber()">添加</button>
        <ul>
            <li v-for="(item, index) in items">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Dome1",
        data () {
            return {
                current: '',
                lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                items: [],
            }
        },
        methods: {
            active: function (index) {
                this.current = index
            },
            addNumber: function () {
                if (this.current == '') return;
                this.items.push(this.lists[this.current])
            }
        }
    }
</script>

<style scoped>
li.active{ background:red; }
</style>