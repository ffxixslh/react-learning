import React, { forwardRef, createRef } from 'react'

const FancyButton = forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={() => props.handleClick()}>
      {props.children}
    </button>
  )
})
FancyButton.displayName = "FancyButton"

const ButtonRef = createRef(null)

export default function FR () {
  const handleClick = () => {
    console.log(ButtonRef.current)
  }
  return (
    <FancyButton ref={ButtonRef} handleClick={handleClick}>
      click me
    </FancyButton>
  )
}
