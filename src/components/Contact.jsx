import React from 'react'
import Banner from '../assets/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftside'>
        <img src={Banner} alt="" className='img'/>
      </div>
      <div className='rightside'>
        <h1 className='baslik'>İletişim İçin</h1>
        <form action="">
          <label htmlFor="">Ad</label>
          <input type="text" placeholder='Gir' name='name' className='input'/>
          <label htmlFor="">E-Mail</label>
          <input type="text" placeholder='Gir' name='name' className='input'/>
          <label htmlFor="">Mesajınız</label>
          <textarea name="message" id="" rows='6' placeholder='Mesajını Gir' className='text'></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact