import React from 'react'
import Logo from '../../assets/react.svg'
import styled from 'styled-components'

const Input = styled.input`
  color: pink;
  font-size: 1rem;
  &::-webkit-input-placeholder {
    color: lightgray;
  }
`

const TopBar = () => {
  return (
    <>
      <img src={Logo} alt="logo" />
      <Input placeholder="Type here..." />
    </>
  )
}

export default TopBar
