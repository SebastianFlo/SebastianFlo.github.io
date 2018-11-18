<template>
    <div class="cube">

        <div class="right-side card">
            <div class="card-content">
                <div class="content">
                    <b-icon icon="account" size="is-small"></b-icon>
                    <h1>{{ todos }}</h1>
                    <div>
                        <input type="text" ref="input" />
                        <button @click=handleAddTodo()>add todo</button>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">2016</time>
                </div>
            </div>
        </div>

        <div class="left-side card">
            <div class="card-content">
                <div class="content">
                    <b-icon icon="account" size="is-small"></b-icon>
                    <h1>{{ todos }}</h1>
                    <div>
                        <input type="text" ref="input" />
                        <button @click=handleAddTodo()>add todo</button>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">2016</time>
                </div>
            </div>
        </div>

        <div class="top-side card">
            <div class="card-content">
                <div class="content">
                    <b-icon icon="account" size="is-small"></b-icon>
                    <h1>{{ todos }}</h1>
                    <div>
                        <input type="text" ref="input" />
                        <button @click=handleAddTodo()>add todo</button>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">2016</time>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array
        },
        addTodo: {
            type: Function
        }
    },
    methods: {
        handleAddTodo () {
            const todo = this.$refs.input.value;
            this.addTodo(todo);
        }
    },
    name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './HelloWorld';
</style>