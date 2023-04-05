import React from 'react'
import PropTypes from 'prop-types'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { persistor, store } from '../store'
const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReduxProvider
