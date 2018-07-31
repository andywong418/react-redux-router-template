import PropTypes from 'prop-types'
import React from 'react'
import {Provider} from 'react-redux'
import AppContainer from './AppContainer.js'
import DevTools from './DevTools'

export default function Root ({ store, history }) {
// add <DevTools /> to test
  return (
    <Provider store={store}>
      <div>
        <AppContainer history={history} store={store}/>
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
