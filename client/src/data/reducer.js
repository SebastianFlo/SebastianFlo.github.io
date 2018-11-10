import { initialState } from './state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.data.todo]
            }

        default:
            return state;
    }
}
