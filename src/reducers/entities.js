import merge from 'lodash/object/merge'

const initialState = {
    videos: {},
    categories: {}
}

export default function entities(state = initialState, action) {
  if (action.entities) {
      return merge({}, state, action.entities)
  }
  return state;
}
