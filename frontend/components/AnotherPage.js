import Proptypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class AnotherPage extends React.Component {

  render () {
    return (
      <div>
        <h3> Just another page </h3>
        <Link to={'/'}> Back Home </Link>
      </div>
    )
  }
}

export default AnotherPage
