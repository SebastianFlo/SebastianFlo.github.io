<template>
    <div class="home tile is-ancestor">
        <div class="tile has-text-centered is-3">
            <HelloWorld/>
        </div>
        <div class="tile has-text-centered is-1"></div>
        <div class="tile has-text-centered is-3">
            <HelloWorld/>
        </div>
        <div class="tile has-text-centered is-1"></div>
        <div class="tile has-text-centered is-3">
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
