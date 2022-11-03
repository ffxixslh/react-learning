import React, { useState } from 'react'
import { useTodoDispatch } from './todoContext'

const AddTodo = () => {
  const [content, setContent] = useState('')
  const dispatch = useTodoDispatch()
  console.log('AddTodo render')

  return (
    <>
      <input
        type="text"
        placeholder="input something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: 'added',
            id: nextId++,
            text: content
          })
          setContent('')
        }}
      >
        Add
      </button>
    </>
  )
}

export default AddTodo

let nextId = 3
