import React from 'react'
import { render } from 'react-dom'
import Routes from './Routes'

import './scss/index.scss'

const Root = () =>
  <>
    <Routes />
  </>

render(<Root />, document.getElementById('spa-entry'))
