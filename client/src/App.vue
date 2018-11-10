<template>
    <section class="section" id="app">
        <div class="level">
            <div class="level-item">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </div>

        <div class="level">
            <router-view class="level-item"/>
        </div>
    </section>
</template>

<style lang="scss">
    @import './App';
</style>