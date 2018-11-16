<template>
    <div class="wrap">
        <div v-if="projects.length" class="cube">
            <div class="right">
                <CubeFaceRight :technologies="projects[0].technologies" />
            </div>
            <!-- <div class="back">back</div> -->
            <div class="top">top <h1 v-text="'</>'"></h1>
            </div>
            <div class="left">
                <CubeFaceLeft :header="projects[0].name"
                    :description="projects[0].description" />
            </div>
            <div class="shadow"></div>
            <!-- <div class="right">right</div> -->
        </div>
    </div>
</template>

<script>
    import AppStore from '../../../data/store.js';
    import CubeFaceRight from '../Cube-Face-Right/Cube-Face-Right.component';
    import CubeFaceLeft from '../Cube-Face-Left/Cube-Face-Left.component';

    export default {
        name: 'Cube',
        data() {
            return {
                mockDescription: 'Project to visualize how charities get funded. Finalist for the 360 Giving Challenge',
                unsubscribe: null,
                projects: []
            }
        },
        components: {
            CubeFaceRight,
            CubeFaceLeft
        },
        mounted() {
            this.unsubscribe = AppStore.subscribe(this.onStateUpdate)
        },
        methods: {
            onStateUpdate() {
                if (this.projects !== AppStore.getState().projects) {
                    this.projects = AppStore.getState().projects;
                }
            }
        },
        destroyed() {
            this.unsubscribe();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
    lang="scss">
    @import './Cube.component';
</style>