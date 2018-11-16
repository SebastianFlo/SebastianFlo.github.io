<template>
    <div class="face">
        <div class="face-title">{{ header }} </div>
        <div class="face-description">{{ description }} </div>
    </div>
</template>

<script>
    export default {
        name: 'Cube-Face-Left',
        props: {
            header: {
                type: String,
            },
            description: {
                type: String,
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Cube-Face-Left.component';
</style>