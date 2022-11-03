import { homeReducer } from './home/index.js'
import { counterReducer } from './counter/index.js'
// import { combineReducers } from 'redux'
import { combineReducers } from '../my-redux/combineReducers'

// export const reducer = (state = {}, action) => {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action)
//   }
// }

export const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})
