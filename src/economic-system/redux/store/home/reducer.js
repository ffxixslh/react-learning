import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants.js'

const initialState = {
  recommends: [],
  banners: []
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BANNERS: {
      return {
        ...state,
        banners: action.payload.banners
      }
    }
    case CHANGE_RECOMMENDS: {
      return {
        ...state,
        recommends: action.payload.recommends
      }
    }
    default: {
      return state
    }
  }
}
