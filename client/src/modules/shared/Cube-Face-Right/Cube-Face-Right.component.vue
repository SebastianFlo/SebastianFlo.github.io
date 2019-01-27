<template>
    <div>
        <div v-for="tech in technologyData" v-bind:key="tech.name" class="technology-icon">
            <img :src="require(`@/assets/${tech.icon}`)" :alt="tech.name">
        </div>
    </div>
</template>

<script>
import { technologiesInfo } from '@/modules/core/Utils/technologies.factory.js';

export default {
    name: 'Cube-Face-Right',
    props: {
        technologies: {
            type: Array
        }
    },
    computed: {
        technologyData () {
            return this.technologies.map(tech => technologiesInfo[tech]);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Cube-Face-Right.component';
</style>