<template>
    <section class="container" id="app">
        <div class="section level top-level">
            <div class="level-left">
                <div class="header-brand">sebastian.party</div>
                <SebNav></SebNav>
            </div>
        </div>

        <div class="section container is-fluid">
            <router-view/>
        </div>

        <div class="section level top-level">
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