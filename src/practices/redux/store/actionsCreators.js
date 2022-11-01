import axios from "axios";
import {
  ADD_NUM,
  SUB_NUM,
  INC_NUM,
  DEC_NUM,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from "./constants";

const addAction = (num) => {
  return {
    type: ADD_NUM,
    payload: {
      num,
    },
  };
};

const subAction = (num) => {
  return {
    type: SUB_NUM,
    payload: {
      num,
    },
  };
};

const incAction = () => {
  return {
    type: INC_NUM,
  };
};

const decAction = () => {
  return {
    type: DEC_NUM,
  };
};

const changeBannerAction = (banners) => {
  return {
    type: CHANGE_BANNERS,
    payload: {
      banners,
    },
  };
};

const changeRecommendAction = (recommends) => {
  return {
    type: CHANGE_RECOMMENDS,
    payload: {
      recommends,
    },
  };
};

const getMultiDataAction = (dispatch) => {
  axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  });
};

export {
  addAction,
  subAction,
  incAction,
  decAction,
  changeBannerAction,
  changeRecommendAction,
  getMultiDataAction,
};
