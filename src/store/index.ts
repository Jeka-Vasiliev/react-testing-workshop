import { applyMiddleware, compose, createStore, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers";
import sagas from "./sagas";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export function createAppStore(...middlewares: Middleware[]) {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, ...middlewares))
  );
  sagaMiddleware.run(sagas);
  return store;
}
