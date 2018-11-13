<template>
    <section class="section container" id="app">
        <div class="level top-level">
            <div class="level-left">
                <SebNav></SebNav>
            </div>
        </div>

        <div class="container is-fluid">
            <router-view/>
        </div>

        <div class="level top-level">
            <div class="level-left"></div>
            <div class="level-right">
                Contact
            </div>
        </div>
    </section>
</template>

<script>
    import SebNav from './modules/core/Nav/Nav.component';

    export default {
        name: 'SebApp',
        components: {
            SebNav
        }
    }
</script>

<style lang="scss">
    @import './App';
</style>