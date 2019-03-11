<template>
    <figure>
        <div @click="modalOpen = true" class="preview">
            <img class="preview-computer" src="@/assets/computer.svg">
            <img class="preview-image" :src="imageUrl">
        </div>

        <b-modal :active.sync="modalOpen">
            <div class="image is-4by3">
                <img :src="imageUrl">
                {{ imageUrl }}
            </div>
        </b-modal>
    </figure>
</template>

<script>
export default {
    name: 'Preview',
    props: ['image'],
    data() {
        return {
            modalOpen: false,
            imageUrl: 'https://raw.githubusercontent.com/SebastianFlo/vue-organizations-visualisations/master/src/assets/screenshot.jpg'
        }
    },
    watch: {
        image: function (newVal, oldVal) {
            if (!newVal) {
                return;
            }
            this.imageUrl = require(`@/assets/projects/${this.image}`);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Preview.component';
</style>