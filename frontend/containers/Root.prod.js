import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer.js'

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <AppContainer store={store} history={history} />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
