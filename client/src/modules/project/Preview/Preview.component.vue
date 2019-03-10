<template>
    <figure @click="modalOpen = true" class="hover image is-4by3">
        <div class="preview">
            <img class="preview-computer" src="@/assets/computer.svg">
            <img class="preview-image" :src="imageUrl">
        </div>

        <b-modal :active.sync="modalOpen">
            <p class="image">
                <img :src="imageUrl">
                {{ imageUrl }}
            </p>
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
            imageUrl: ''
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