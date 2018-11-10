<template>
    <div class="hello">
        <h1>{{ todos }}</h1>
        <div>
            <input type="text" ref="input" />
            <button @click=handleAddTodo()>add todo</button>
        </div>
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
