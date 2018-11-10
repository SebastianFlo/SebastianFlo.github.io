import { createStore } from 'redux';
import { reducer } from './reducer';

const AppStore = createStore(reducer);

export default AppStore;
