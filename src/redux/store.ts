import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from  './reducers/index'
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store