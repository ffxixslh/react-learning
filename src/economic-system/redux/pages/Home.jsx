import React, { PureComponent } from 'react'
import { decAction, subAction } from '../store/counter/actionsCreators'
// import { connect } from "../utils/connect";
import { connect } from 'react-redux'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <p>count:{this.props.counter}</p>
        <button onClick={() => this.props.decNum()}>dec 1</button>
        <button onClick={() => this.props.subNum(5)}>sub 5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    counter: state.counterInfo.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decNum () {
      dispatch(decAction())
    },
    subNum (num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
