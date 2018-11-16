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
    import Projects from './data/projects.json';
    import AppStore from './data/store.js';

    export default {
        name: 'SebApp',
        components: {
            SebNav
        },
        mounted () {
            AppStore.dispatch({
                type: 'ADD_PROJECTS',
                data: Projects.projects
            });
        }
    }
</script>

<style lang="scss">
    @import './App';
</style>