import React from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './SwitchTransition.css'

function ReactSwitchTransition () {
  const [isOn, setIsOn] = React.useState(false)
  return (
    <SwitchTransition mode={'in-out'}>
      <CSSTransition in={isOn} key={isOn ? 'on' : 'off'} classNames="button" timeout={300}>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? 'on' : 'off'}</button>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default ReactSwitchTransition
