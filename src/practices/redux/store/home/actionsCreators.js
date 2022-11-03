import axios from 'axios'
import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_MULTIDATA
} from './constants.js'

const changeBannerAction = (banners) => {
  return {
    type: CHANGE_BANNERS,
    payload: {
      banners
    }
  }
}

const changeRecommendAction = (recommends) => {
  return {
    type: CHANGE_RECOMMENDS,
    payload: {
      recommends
    }
  }
}

// redux-thunk
const getMultiDataAction = (dispatch, getState) => {
  axios({ url: 'http://123.207.32.32:8000/home/multidata' }).then((res) => {
    const data = res.data.data
    dispatch(changeBannerAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })
}

// redux-saga
const fetchMultiDataAction = {
  type: FETCH_MULTIDATA
}

export {
  changeBannerAction,
  changeRecommendAction,
  getMultiDataAction,
  fetchMultiDataAction
}
