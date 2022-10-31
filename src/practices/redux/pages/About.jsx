import React from "react";
import { addAction, incAction } from "../store/actionsCreators";
import connect from "../utils/connect";

function About(props) {
  const { incNum, addNum } = props;
  return (
    <div>
      <h2>About</h2>
      <p>count:{props?.counter}</p>
      <button onClick={() => incNum()}>inc 1</button>
      <button onClick={() => addNum(5)}>add 5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state?.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incNum() {
      dispatch(incAction());
    },
    addNum(num) {
      dispatch(addAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
