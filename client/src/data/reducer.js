import { initialState } from './state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.data.todo]
            }

        case 'ADD_PROJECTS':
            return {
                ...state,
                projects: action.data
            }

        default:
            return state;
    }
}
