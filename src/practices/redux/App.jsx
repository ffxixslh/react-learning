import React, { PureComponent } from "react";
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Home />
        <About />
      </>
    );
  }
}
