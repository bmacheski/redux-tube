import merge from 'lodash/object/merge'

const initialState = {
    videos: {}
}

export default function entities(state = initialState, action) {

    if (action.entities) {
      console.log(action.entities)
        return merge({}, state, action.entities);
    }
    return state;
}
