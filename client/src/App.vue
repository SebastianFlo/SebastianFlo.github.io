<template>
    <div class="container" id="app">
        <nav class="navbar"
            role="navigation"
            aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item"
                    href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width="112"
                        height="28">
                </a>

                <a role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/">Home</router-link>
                    <router-link class="navbar-item" to="/about">About</router-link>
                </div>

                <div class="navbar-end">
                </div>
            </div>
        </nav>

        <router-view />
    </div>
</template>

<style lang="scss">
    @import './App';
</style>