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
                        <div v-if="project.url">
                            <a :href="project.url" target="new">Url</a>
                        </div>
                        <div class="sef-vertical-box--medium" v-if="project.githubLink">
                            <a :href="project.githubLink" target="new">Github Link</a>
                        </div>
                        <p class="subtitle">{{ project.shortDescription }}</p>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child">
                        <Preview v-bind:image="project.preview" class="hover image is-4by3"/>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-warning">
                    <p class="subtitle">Description</p>
                    <p>{{ project.longDescription }}</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-warning">
                    <p class="subtitle">Technology</p>
                    <div class="content">
                        <div v-for="tech in technologyData" v-bind:key="tech.name" class="technology-icon project--technology-icon">
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
import Preview from './Preview/Preview.component';

export default {
    name: 'project',
    data () {
        return {
            project: {}
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
    components: {
        Preview
    },
    methods: {
        onStateUpdate () {
            if (this.project !== AppStore.getState().active.project) {
                this.project = AppStore.getState().active.project;
            }
        }
    },
    watch: {
        '$route' (to) {
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
    destroyed () {
        this.unsubscribe();
    }
}
</script>

<style lang="scss">
    @import './Project';
</style>