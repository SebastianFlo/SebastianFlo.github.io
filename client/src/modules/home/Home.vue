<template>
    <div class="home level">
        <div class="level-item has-text-centered">
            <HelloWorld/>
        </div>
        <div class="level-item has-text-centered">
            <HelloWorld/>
        </div>
    </div>
</template>

<script>
    import HelloWorld from '@/modules/core/HelloWorld/HelloWorld.state.js';

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss">
    @import './Home';
</style>
