<template>
    <div class="blog hover" @click="goToUrl(latestPost.url)">
        <div class="card sef-rounded">
            <div class="card-image sef-rounded">
                <figure class="image">
                    <img class="sef-rounded-top" :src="latestPost.coverImage" alt="Placeholder image">
                </figure>
            </div>
            <header class="card-header">
                <p class="card-header-title is-centered">{{ latestPost.title }}</p>
            </header>

            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-24x24">
                            <img :src="latestPost.authorAvatar" alt="Author avatar">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="subtitle is-6">{{ latestPost.author }}</p>
                    </div>
                    <div class="media-right">
                        <p class="has-text-grey is-size-7">{{ latestPost.date }}</p>
                    </div>
                </div>

                <div class="content has-text-grey column">
                    {{ latestPost.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppStore from '../../data/store.js';

export default {
    name: 'blog',
    data () {
        return {
            latestPost: {}
        }
    },
    mounted () {
        this.unsubscribe = AppStore.subscribe(this.onStateUpdate)
        this.latestPost = AppStore.getState().latestPost;
    },
    methods: {
        goToUrl (url) {
            window.open(url, '_blank');
        },
        onStateUpdate () {
            if (this.latestPost !== AppStore.getState().latestPost) {
                this.latestPost = AppStore.getState().latestPost;
            }
        }
    },
    destroyed () {
        this.unsubscribe();
    }
}
</script>

<style lang="scss">
    @import './Blog.scss';
</style>