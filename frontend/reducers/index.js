import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

function rootReducer (state = {name: 'Demo'}, action) {
  switch (action.type) {
    default:
      return state
  }
}
const mainReducer = combineReducers({routing: routerReducer, rootReducer});
export default mainReducer
