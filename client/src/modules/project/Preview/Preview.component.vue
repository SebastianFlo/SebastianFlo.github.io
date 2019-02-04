<template>
    <div class="preview">
        <img class="preview-computer" src="@/assets/computer.svg">
        <img class="preview-image" :src="image">
    </div>
</template>

<script>


export default {
    name: 'Preview',
    props: ['image']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Preview.component';
</style>