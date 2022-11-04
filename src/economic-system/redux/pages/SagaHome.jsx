import React, { PureComponent } from 'react'
// import { connect } from "../utils/connect";
import { connect } from 'react-redux'
import { fetchMultiDataAction } from '../store/home/actionsCreators'

class Home extends PureComponent {
  componentDidMount () {
    this.props.fetchMultiData()
  }

  render () {
    return (
      <div>
        <h2>Saga Home</h2>
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
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMultiData () {
      dispatch(fetchMultiDataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
