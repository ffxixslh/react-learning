import React, { PureComponent } from 'react'
// import { connect } from "../utils/connect";
import { connect } from 'react-redux'
import { getMultiDataAction } from '../store/home/actionsCreators'

class Home extends PureComponent {
  componentDidMount () {
    this.props.getMultiData()
  }

  render () {
    return (
      <div>
        <h2>Thunk Home</h2>
        <ul>
          <h3>Banner</h3>
          {this.props.banners.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
        <ul>
          <h3>Recommend</h3>
          {this.props.recommends.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMultiData () {
      dispatch(getMultiDataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
