import React from 'react'
import {
  Link
} from 'react-router-dom'

export default props =>
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/topics'>Topics</Link>
    </li>
  </ul>
