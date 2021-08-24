/** Base */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

/** Router */
import { BrowserRouter as RouteProvider } from 'react-router-dom'

/** Redux */
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate as PersistProvider } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

ReactDOM.render(
  <ReduxProvider store={store}>
    <RouteProvider>
      <PersistProvider persistor={persistor}>
        <App />
      </PersistProvider>
    </RouteProvider>
  </ReduxProvider>,
  document.getElementById('root')
)
