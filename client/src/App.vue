<template>
    <section class="section" id="app">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <SebNav></SebNav>
                </div>
            </div>
        </div>

        <div class="container level">
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