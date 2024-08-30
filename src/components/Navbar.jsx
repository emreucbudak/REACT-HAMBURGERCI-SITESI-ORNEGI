import React from 'react'
import Logo from '../assets/sitelogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <Link to= '/'><img src={Logo} alt="" /></Link>
        </div>
        <div className='mainLink'>
            <Link to='/'>Ana Sayfa</Link>
            <Link to='/menu'>Menü</Link>
            <Link to='/about'>Hakkımızda</Link>
            <Link to='/contact'>İletişim</Link>
        </div>
    </div>
  )
}

export default Navbar