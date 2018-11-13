<template>
    <section class="section container" id="app">
        <div class="level top-level">
            <div class="level-left">
                <div class="level-item">
                    <SebNav></SebNav>
                </div>
            </div>
        </div>

        <div class="container level is-fluid">
            <router-view class="level-item"/>
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