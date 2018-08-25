import { fromJS } from 'immutable'

const createReducer = (initialState, handlers) => (state = initialState, action) => {
  const fn = handlers[action.type];
  return fn ? fn(state, fromJS(action.payload)) : state;
}

export default createReducer