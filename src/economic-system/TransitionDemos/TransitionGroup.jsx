import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './TransitionGroup.css'

function ReactTransitionGroup () {
  const [names, setNames] = React.useState(['cc', 'vv', 'hotel'])

  const addName = () => {
    setNames([...names, `john${Date.now()}`])
  }

  const removeName = (index) => {
    const nextNames = names.filter((item, i) => i !== index)
    setNames(nextNames)
  }

  return (
    <TransitionGroup>
      {names.map((item, index) => {
        return (
          <CSSTransition key={item} timeout={500} classNames={'item'}>
            <div>
              {item}
              <button onClick={() => removeName(index)}>remove</button>
            </div>
          </CSSTransition>
        )
      })}
      <button onClick={addName}>add</button>
    </TransitionGroup>
  )
}

export default ReactTransitionGroup
