import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { reducer } from './reducer';

const AppStore = createStore(reducer, applyMiddleware(logger));

export default AppStore;
