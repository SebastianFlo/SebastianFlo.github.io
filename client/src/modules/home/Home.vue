<template>
    <div class="home">
        <div class="columns">
            <div class="column has-text-centered is-one-third">
                <Cube />
            </div>

            <div class="column has-text-centered"></div>

            <div class="column has-text-centered is-one-third">
                <Cube />
            </div>

            <div class="column has-text-centered"></div>

            <div class="column has-text-centered">
                <Cube />
            </div>
        </div>

        <div class="columns">
            <div class="column has-text-centered is-one-third">
                <Cube />
            </div>

            <div class="column has-text-centered"></div>

            <div class="column has-text-centered is-one-third">
                <Cube />
            </div>

            <div class="column has-text-centered"></div>

            <div class="column has-text-centered is-one-third">
                <Cube />
            </div>
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