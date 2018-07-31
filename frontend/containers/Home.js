import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Link to={'/anotherPage'}> Click Here </Link>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.rootReducer.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
