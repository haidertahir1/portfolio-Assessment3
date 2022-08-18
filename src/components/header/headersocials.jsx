import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className="header__socials">
         <a href="https://facebook.com" target='_blank'><font color='#6b022f'></font><BsFacebook/></a>
         
         <a href="https://linkedin.com" target='_blank'><FaLinkedinIn/></a>
         <a href="https://instagram.com" target='_blank'><BsInstagram/></a>


    </div>
  )
}

export default headersocials