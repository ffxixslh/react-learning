import React from 'react'

const LoginPage = () => {
  return <h2>Login</h2>
}

const CartPage = () => {
  return <h2>Cart</h2>
}

const withAuth = (WrappedComponent) => {
  const NewCpn = (props) => {
    if (props.isLogin) return <WrappedComponent {...props} />
    return <LoginPage {...props} />
  }

  NewCpn.displayName = 'AuthCpn'
  return NewCpn
}

const AuthCartPage = withAuth(CartPage)

export default function Auth () {
  return (
    <>
      <AuthCartPage isLogin={true} />
    </>
  )
}
