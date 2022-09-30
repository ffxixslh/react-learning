import React, { Component, forwardRef } from "react";

class FancyButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.children}</button>
    );
  }
}

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log("old value", prevProps);
      console.log("new value", this.props);
    }
    render() {
      return <WrappedComponent ref={this.props.forwardedRef} {...this.props} />;
    }
  }

  // 在这里接收外部传回的 ref 
  return forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export default logProps(FancyButton);
