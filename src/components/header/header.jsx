import React from 'react'
import './header.css'
import Headersocials from './headersocials'
import Me from '../../assets/myPic.png'
const header = () => {
  return (
    <section id='home'>
      
     <header>
      <div className="header__container">
        <h1><b>I'm <font color="#fb0e0e">Haider</font> Tahir</b></h1>
        <h2>Mern Stack Developer</h2>
   <Headersocials/>
         <div className="me-image">
          <img src={Me} alt='me'/>
         </div>
      </div>
     </header>
     </section>
  )
}

export default header