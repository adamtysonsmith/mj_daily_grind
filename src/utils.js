import cloneDeep from 'lodash/cloneDeep'

export const identity = (state) => {
  if (state && state.toJS) return state.toJS()
  return cloneDeep(state)
}
