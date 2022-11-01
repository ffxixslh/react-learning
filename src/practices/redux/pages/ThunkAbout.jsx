import React from "react";
import { getMultiDataAction } from "../store/actionsCreators";
// import { connect } from "../utils/connect";
import { connect } from "react-redux";
import { useEffect } from "react";

function About(props) {
  const { banners, recommends, getAboutMultiData } = props;

  useEffect(() => {
    getAboutMultiData();
  }, []);

  return (
    <div>
      <h2>Thunk About</h2>
      <ul>
        <h3>Banner</h3>
        {banners.map((item) => (
          <li key={item.acm}>{item.title}</li>
        ))}
      </ul>
      <ul>
        <h3>Recommend</h3>
        {recommends.map((item) => (
          <li key={item.acm}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    banners: state.banners,
    recommends: state.recommends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAboutMultiData() {
      dispatch(getMultiDataAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
