import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { persistedStore } from './redux/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.baseURL = 'http://localhost:4000/'

ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
