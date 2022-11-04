import { legacy_createStore as legacyCreateStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducer.js'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga.js'

// redux-devtools 的引入，需要用到 compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// redux-saga 的引入，通过调用 createSagaMiddleware 生成
const sagaMiddleware = createSagaMiddleware()

// redux-thunk 的引入，需要调用 applyMiddleware 并将中间件当作参数传入
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)

const store = legacyCreateStore(reducer, composeEnhancers(storeEnhancer))

sagaMiddleware.run(rootSaga)

export default store
