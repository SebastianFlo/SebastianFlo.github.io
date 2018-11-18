<template>
    <div class="project">
        <div class="columns">
            <div class="column is-one-third">
                This is the project page
                <h1>{{ project.name }}</h1>
            </div>
            <div class="column has-text-centered">
                This is the project photo
                <img v-if="screenshot" :src="require(`@/assets/${screenshot}`)">
            </div>
        </div>
        <div class="columns">
            <div class="column has-text-centered">
                {{ project.description }}
            </div>
        </div>
    </div>
</template>

<script>
import AppStore from '../../data/store.js';
import { technologiesInfo } from '@/modules/core/Utils/technologies.factory.js';

export default {
    name: 'project',
    data () {
        return {
            project: {},
            screenshot: ''
        }
    },
    props: ['id'],
    mounted () {
        this.unsubscribe = AppStore.subscribe(this.onStateUpdate);
        // set active Project
        AppStore.dispatch({
            type: 'SET_ACTIVE_PROJECT',
            data: this.id
        });

    },
    methods: {
        onStateUpdate () {
            if (this.project !== AppStore.getState().active.project) {
                this.project = AppStore.getState().active.project;
                this.screenshot = technologiesInfo[this.project.technologies[0]].icon
            }
        }
    },
    watch: {
        '$route' (to) {
            // eslint-disable-next-line
                console.log('to', to);

        }
    },
    destroyed () {
        this.unsubscribe();
    }
}
</script>

<style lang="scss">
    @import './Project';
</style>