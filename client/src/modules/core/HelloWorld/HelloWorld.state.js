// components/App.js
import { connect } from 'redux-vue';

import HelloWorld from './HelloWorld.vue';

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo (todo) {
        dispatch({
            type: 'ADD_TODO',
            data: { todo }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
