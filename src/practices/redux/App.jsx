import React, { PureComponent } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import { StoreContext } from "./utils/context";
import store from "./store";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StoreContext.Provider value={store}>
        <Home />
        <About />
      </StoreContext.Provider>
    );
  }
}
