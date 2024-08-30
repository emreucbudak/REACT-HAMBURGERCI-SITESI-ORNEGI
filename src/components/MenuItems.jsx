import React from 'react'
import menuLogo from '../assets/burger.jpg'

function MenuItems({image, name , content}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${menuLogo})`}}></div>
        <h1 style={{marginBottom: 10}}>{name}</h1>
        <h5>{content}</h5>
    </div>
  )
}

export default MenuItems