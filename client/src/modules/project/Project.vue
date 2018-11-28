<template>
    <div class="tile is-ancestor">
        <div class="tile is-vertical">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                    <router-link :to="'../'">
                        <h1 v-text="'< Back'"></h1>
                    </router-link>
                </article>
            </div>
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-warning">
                    <p class="title">{{ project.name }}</p>
                    <p class="subtitle">{{ project.description }}</p>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child">
                        <figure class="image is-4by3">
                            <img class="preview-computer" src="@/assets/computer.svg">
                        </figure>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-warning">
                <p class="title">Technology</p>
                <p class="subtitle">And other stuff</p>
                <div class="content">
                    <div v-for="tech in technologyData" v-bind:key="tech.name" class="technology-icon">
                        <img width="50" :src="require(`@/assets/${tech.icon}`)" :alt="tech.name">
                        {{ tech.name }}
                    </div>
                </div>
            </article>
            </div>
        </div>
    </div>
</template>

<script>
import AppStore from '../../data/store.js';
import { technologiesInfo } from '@/modules/core/Utils/technologies.factory.js';

export default {
    name: 'project',
    data() {
        return {
            project: {},
            screenshot: ''
        }
    },
    props: ['id'],
    mounted() {
        this.unsubscribe = AppStore.subscribe(this.onStateUpdate);
        // set active Project
        AppStore.dispatch({
            type: 'SET_ACTIVE_PROJECT',
            data: this.id
        });

    },
    methods: {
        onStateUpdate() {
            if (this.project !== AppStore.getState().active.project) {
                this.project = AppStore.getState().active.project;
                this.screenshot = technologiesInfo[this.project.technologies[0]].icon
            }
        }
    },
    watch: {
        '$route'(to) {
            // eslint-disable-next-line
            console.log('to', to);

        }
    },
    computed: {
        technologyData () {
            if (!this.project || !this.project.technologies) {
                return [];
            }
            return this.project.technologies.map(tech => technologiesInfo[tech]);
        }
    },
    destroyed() {
        this.unsubscribe();
    }
}
</script>

<style lang="scss">
    @import './Project';
</style>