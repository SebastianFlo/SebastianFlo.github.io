<template>
    <div class="container home tile is-ancestor">
        <div class="tile has-text-centered is-3">
            <Cube/>
        </div>

        <div class="tile has-text-centered is-1"></div>

        <div class="tile has-text-centered is-3">
            <Cube/>
        </div>

        <div class="tile has-text-centered is-1"></div>

        <div class="tile has-text-centered is-3">
            <Cube/>
        </div>
    </div>
</template>

<script>
    import Cube from '@/modules/shared/Cube/Cube.component';

    export default {
        name: 'home',
        components: {
            Cube
        }
    }
</script>

<style lang="scss">
    @import './Home';
</style>
