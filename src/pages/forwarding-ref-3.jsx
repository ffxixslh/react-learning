import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus () {
      realInputRef.current.focus()
    }
  }))
  return <input {...props} ref={realInputRef} />
})

MyInput.displayName = "MyInput"

export default function Form () {
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.focus()
  }
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
