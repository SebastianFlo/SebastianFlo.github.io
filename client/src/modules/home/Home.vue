<template>
    <div class="home">
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
</template>

<script>
import AppStore from '../../data/store.js';
import Cube from '@/modules/shared/Cube/Cube.component';

export default {
    name: 'home',
    components: {
        Cube
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