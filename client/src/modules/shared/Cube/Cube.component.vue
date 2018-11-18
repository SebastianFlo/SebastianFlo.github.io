<template>
    <div class="wrap">
        <div v-if="project" class="cube">
            <div class="right">
                <CubeFaceRight :technologies="project.technologies" />
            </div>
            <!-- <div class="back">back</div> -->
            <div class="top">top
                    <router-link :to="{ name: 'project', params: { id: project.id }}">
                        <h1 v-text="'</>'"></h1>
                    </router-link>
            </div>
            <div class="left">
                <CubeFaceLeft :header="project.name" :description="project.description" />
            </div>
            <div class="shadow"></div>
            <!-- <div class="right">right</div> -->
        </div>
    </div>
</template>

<script>
import CubeFaceRight from '../Cube-Face-Right/Cube-Face-Right.component';
import CubeFaceLeft from '../Cube-Face-Left/Cube-Face-Left.component';

export default {
    name: 'Cube',
    props: ['project'],
    components: {
        CubeFaceRight,
        CubeFaceLeft
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
    lang="scss">
    @import './Cube.component';
</style>