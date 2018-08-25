import 'babel-polyfill' // for generator functions in sagas

import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, initialState } from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware
]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export default store
