import { initialState } from './state';
import { getProjectById } from '../data/utils';

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

    case 'ADD_BLOG_POST':
        return {
            ...state,
            latestPost: action.data
        }

    case 'SEND_MESSAGES':
        return {
            ...state,
            messages: action.data
        }

    case 'SET_ACTIVE_PROJECT': {

        const match = getProjectById(action.data);
        return {
            ...state,
            active: {
                project: match
            }
        }
    }

    default:
        return state;
    }
}
