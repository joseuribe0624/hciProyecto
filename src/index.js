import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { store, persistor } from './reducers/index'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'



render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
