import React from 'react'
import {data} from '../Helpers/data'
import MenuItems from './MenuItems'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menümüz</h1>
      <div className='menuList'>
        {
          data.map((datam,index) => {
            return <MenuItems key={index} image= {datam.img} name = {datam.name} content = {datam.content}/>
          })
        }
      </div>
    </div>
  )
}

export default Menu