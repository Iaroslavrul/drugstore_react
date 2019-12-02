// redux methods which help to configure redux store
import { createStore, applyMiddleware, compose } from 'redux';
// logger which needed only for development purposes
import { createLogger } from 'redux-logger';
// main reducer
import { rootReducer } from "./root.reducer";
// middleware for API requests
import thunk from 'redux-thunk';

// functions invocations to build redux store
const logger = createLogger({ collapsed: false }),
    createStoreWithMiddleware = applyMiddleware(thunk, logger),
    store = createStore(rootReducer, compose(createStoreWithMiddleware));

export default store;
