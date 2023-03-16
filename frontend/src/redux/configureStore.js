import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import mainReducer from './Main/reducer';
import rootSaga from './Main/saga';

const configureStore = () => {
  // const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const reducer = combineReducers({
    main: mainReducer,
  });
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
