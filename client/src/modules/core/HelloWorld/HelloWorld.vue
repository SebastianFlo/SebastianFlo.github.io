<template>
    <div class="hello card">
        <header class="card-header">
            <p class="card-header-title">
                Component
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                <h1>{{ todos }}</h1>
                <div>
                    <input type="text" ref="input" />
                    <button @click=handleAddTodo()>add todo</button>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script>
    export default {
        props: {
            todos: {
                type: Array,
            },
            addTodo: {
                type: Function,
            },
        },
        methods: {
            handleAddTodo() {
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