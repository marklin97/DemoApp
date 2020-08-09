import React from 'react'
import logo from './Resources/Entry.jpg'
import { Link } from 'react-router-dom'
import './App.css'

function App () {
  const buttonStyle = {
    marginTop: '40vh',
    marginLeft: '43vw',
    display: 'block'
  }
  return (
    <Link style={buttonStyle} to='/weather'>
      <img src={logo} alt={'start'} />
    </Link>
  )
}

export default App
