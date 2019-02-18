<template>
    <section class="container" id="app">
        <div class="section level top-level">
            <div class="level-left">
                <div class="header-brand">sebastian florian</div>
                <SebNav></SebNav>
            </div>
        </div>

        <div class="section">
            <div class="container is-fluid">
                <transition :name="'router-anim'">
                    <router-view/>
                </transition>
            </div>
        </div>

        <div class="section level top-level">
            <div class="level-left">
                <!-- Contact -->
            </div>
            <div class="level-right">
                <SebContact/>
            </div>
        </div>
    </section>
</template>

<script>
import SebNav from './modules/core/Nav/Nav.component';
import SebContact from './modules/core/Contact/Contact.component';

import Projects from './data/mocks/projects.json';
import AppStore from './data/store.js';
import { getLatestBlogPost } from './api/blog/blog.api.js';

export default {
    name: 'SebApp',
    components: {
        SebNav,
        SebContact
    },
    // data () {
    //     return {
    //     }
    // },
    mounted () {
        getLatestBlogPost();

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