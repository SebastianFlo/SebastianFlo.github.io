<template>
    <div class="wrap">
            <div class="cube">
                <div class="right">
                    <div class="technology-icon">
                        <img src="@/assets/angular.svg" alt="Angular">
                    </div>
                    <div class="technology-icon">
                        <img src="@/assets/vue.png" alt="Angular">
                    </div>
                    <div class="technology-icon">
                        <img src="@/assets/redux.svg" alt="Angular">
                    </div>
                </div>
                <!-- <div class="back">back</div> -->
                <div class="top">top <h1 v-text="'</>'"></h1></div>
                <div class="left">left</div>
                <div class="shadow"></div>
                <!-- <div class="right">right</div> -->
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Cube'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Cube.component';
</style>