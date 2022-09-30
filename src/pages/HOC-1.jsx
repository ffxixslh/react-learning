import React, { PureComponent, createContext } from "react";

const UserContext = createContext({
  language: "chinese",
  region: "China",
});

export const FC = ({ name, language, region }) => {
  return <div>{`name:${name} language:${language} region:${region}`}</div>;
};

export class CC extends PureComponent {
  render() {
    return (
      <div>{`name:${this.props.name} language:${this.props.language} region:${this.props.region}`}</div>
    );
  }
}

function EnhancedClassComponent(WrappedComponent) {
  return class NewClassComponent extends PureComponent {
    render() {
      return (
        <UserContext.Consumer>
          {(user) => {
            return <WrappedComponent {...this.props} {...user} />;
          }}
        </UserContext.Consumer>
      );
    }
  };
}

function EnhancedFunctionComponent(WrappedComponent) {
  return function NewFunctionComponent(props) {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

const CWithEnhance = EnhancedClassComponent(CC);
const FWithEnhance = EnhancedFunctionComponent(FC);

export default function HOC() {
  return (
    <UserContext.Provider value={{ language: "zh-CN", region: "CN" }}>
      <CWithEnhance name="CC" />
      <FWithEnhance name="FC" />
    </UserContext.Provider>
  );
}
