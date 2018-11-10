<template>
    <div class="home">
        <img alt="Vue logo"
            src="../../assets/logo.png">
        <HelloWorld msg="Sebastian Florian - Web Development" />
    </div>
</template>

<script>
    import HelloWorld from '@/modules/core/HelloWorld/HelloWorld.state.js';

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
