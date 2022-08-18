import React from 'react'
import { useState } from 'react'
import './nav.css'
import Logo from '../../assets/folio-logo-596D251FE4-seeklogo.com.jpg'



const Nav =()=> {
const [activeNav, setActiveNav] = useState('#');

  return (
    
     
    <nav>

     <div className='nav__container'>
      
      <a href='#home' onClick={()=> setActiveNav ('#')} className={activeNav==='#' ? 'active': ''}><font color='#fb0e0e'>Home</font></a>
      <a href='#about' onClick={()=> setActiveNav ('#about')} className={activeNav==='#about' ? 'active' : ""}>About</a>
      <a href='#portfolio' onClick={()=> setActiveNav ('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ""}>Portfolio</a>
      <a href='#pages' onClick={()=> setActiveNav ('#pages')} className={activeNav==='#pages' ? 'active' : ""}>Pages</a>
      <a href='#talk'onClick={()=> setActiveNav ('#talk')} className={activeNav==='#talk' ? 'active' : ""}>Contact</a>
      <a href='#blog'onClick={()=> setActiveNav ('#blog')} className={activeNav==='#blog' ? 'active' : ""}>Blog</a>
     
    
    </div>

      <div className='nav__btn'>
      <a href='#contact' className='btn btn1'>Lets Talk</a>
      </div>
      <div className="nav__logo">
        <img src={Logo} alt="logo" />
     </div>
      </nav>
      
    
  )
}

export default Nav