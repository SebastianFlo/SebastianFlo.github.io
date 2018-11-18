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

    case 'SET_ACTIVE_PROJECT': {

        const match = getProjectById(action.data);
        // eslint-disable-next-line
        console.log('match', match);
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
