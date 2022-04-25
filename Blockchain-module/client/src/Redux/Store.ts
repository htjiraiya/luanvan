import { createStore, compose } from 'redux';
import root from './Reducers/Index'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

//set code to using redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, /* preloadedState, */ composeEnhancers());
//const store = createStore(root)

export default store;