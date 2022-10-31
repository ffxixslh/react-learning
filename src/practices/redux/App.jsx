import React, { PureComponent } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import { StoreContext } from "./utils/context";
import store from "./store";
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
