import React, { Component } from 'react'

const LoginPage = () => {
  return <h2>Login</h2>
}

const withRenderTime = (WrappedComponent) => {
  return class EnhancedClassComponent extends Component {
    UNSAFE_componentWillMount () {
      this.startTime = Date.now()
    }

    componentDidMount () {
      this.endTime = Date.now()
      const delta = this.endTime - this.startTime
      console.log(`page: ${WrappedComponent.name} time:${delta}`)
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

const LoginTime = withRenderTime(LoginPage)

export default function Time () {
  return (
    <>
      <LoginTime />
    </>
  )
}
