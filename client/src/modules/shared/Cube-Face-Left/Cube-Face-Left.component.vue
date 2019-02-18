<template>
    <div class="face">
        <router-link :to="{ name: 'project', params: { id: projectId }}">
            <div class="face-title">{{ header }} </div>
            <div class="face-description">{{ description }} </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Cube-Face-Left',
    props: {
        header: {
            type: String
        },
        description: {
            type: String
        },
        projectId: {
            type: String
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Cube-Face-Left.component';
</style>