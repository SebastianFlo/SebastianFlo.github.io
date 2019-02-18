<template>
    <div class="home">
        <div class="section slim-section columns">
            <div class="column">
                <h1 class="title">Latest article</h1>
            </div>
            <div class="column">
                <a class="subtitle read-more-fix is-pulled-right is-6">See blog ></a>
            </div>
        </div>

        <div class="section columns">
            <Blog class="column has-text-centered is-full"/>
        </div>

        <div class="section">
            <h1 class="title">Projects</h1>
        </div>

        <div class="section">
            <div class="columns">
                <div v-for="project of projects.row1" :key="project.id" class="column has-text-centered is-one-third">
                    <Cube :project="project"/>
                </div>
            </div>

            <div class="columns">
                <div v-for="project of projects.row2" :key="project.id" class="column has-text-centered is-one-third">
                    <Cube :project="project"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppStore from '../../data/store.js';
import Cube from '@/modules/shared/Cube/Cube.component';
import Blog from '@/modules/blog/Blog';

export default {
    name: 'home',
    components: {
        Cube,
        Blog
    },
    data () {
        return {
            unsubscribe: null,
            projects: []
        }
    },
    mounted () {
        this.unsubscribe = AppStore.subscribe(this.onStateUpdate)
        this.projects = AppStore.getState().projects;
    },
    methods: {
        onStateUpdate () {
            if (this.projects !== AppStore.getState().projects) {
                this.projects = AppStore.getState().projects;
            }
        }
    },
    destroyed () {
        this.unsubscribe();
    }
}
</script>

<style lang="scss">
    @import './Home';
</style>