import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//reducers to import
//import userReducer from "./userReducer";
import contactReducer from "../containers/Contact/reducers";
//import projectsReducer from "./projectsReducer";

const configureStore = (INITIAL_STATE = {}) => {
    const reducer = combineReducers({
        contact: contactReducer,
    });

    const sagaMiddleware = createSagaMiddleware();

    const middleware = [sagaMiddleware];

    const store = createStore(
        reducer,
        INITIAL_STATE,
        applyMiddleware(...middleware)
    );

    // configureStore extensions for injecting
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    // if (module.hot) {
    //     module.hot.accept('./reducers', () => {
    //         store.replaceReducer(createReducer(store.injectedReducers));
    //     });
    // }

    return store;
}

export default configureStore;