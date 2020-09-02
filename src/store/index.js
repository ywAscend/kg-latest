import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddlware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from '../store/saga'

//使用redux-devtools-extension
const composeEnhancer =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
        compose

const sagaMiddleware = createSagaMiddlware()

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(sagaMiddleware)))

export default store

sagaMiddleware.run(rootSaga)

