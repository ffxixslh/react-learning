import React, { PureComponent } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Home from "./pages/ThunkHome";
import Home from "./pages/SagaHome";
import About from "./pages/ThunkAbout";

import store from "./store/store";
// import { StoreContext } from "./utils/context";
import { Provider } from "react-redux";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <StoreContext.Provider value={store}>
      <Provider store={store} >
        <Home />
        <About />
      </Provider>
      // </StoreContext.Provider>
    );
  }
}
