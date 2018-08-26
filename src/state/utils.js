import cloneDeep from 'lodash/cloneDeep'
import { fromJS } from 'immutable'

export const stateToJS = (state) => {
  if (state && state.toJS) return state.toJS()
  return cloneDeep(state)
}

export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  const fn = handlers[action.type];
  return fn ? fn(state, fromJS(action.payload)) : state;
}
