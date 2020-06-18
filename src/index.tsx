import { Container } from 'react-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'

import store from './app/store'
import App from './app/App'
ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <Container><App /></Container>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
