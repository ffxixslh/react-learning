import axios from "axios";
import { all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { changeBannerAction, changeRecommendAction } from "./actionsCreators.js";
import { FETCH_MULTIDATA } from "./constants.js";

function* fetchMultiData(action) {
  const result = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const banners = result.data.data.banner.list;
  const recommends = result.data.data.recommend.list;
  // yield put(changeBannerAction(banners));
  // yield put(changeRecommendAction(recommends));
  yield all([
    yield put(changeBannerAction(banners)),
    yield put(changeRecommendAction(recommends)),
  ]);
}

function* rootSaga() {
  yield all([
    // takeEvery(FETCH_MULTIDATA, fetchMultiData),
    takeLatest(FETCH_MULTIDATA, fetchMultiData),
  ]);
}

export default rootSaga;
