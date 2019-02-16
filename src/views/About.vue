<template>
  <div class="about">
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import store from '@/store';
export default {
    name: 'about',
    store,
    data () {
        return {
            message: store.state.message,
            count: store.state.count,
        }
    }
}
</script>