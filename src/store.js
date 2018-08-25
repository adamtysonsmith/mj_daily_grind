import 'babel-polyfill' // for generator functions in sagas

import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, initialState } from './reducer'
import rootSaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware
]

const enhancers = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, initialState, enhancers)
sagaMiddleware.run(rootSaga)

export default store
