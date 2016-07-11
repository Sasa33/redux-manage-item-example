import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app.js'
import configureStore from './store/configureStore'


let store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
