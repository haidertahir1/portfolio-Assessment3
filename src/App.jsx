import React from 'react'
import About from './components/About/about'
import Footer from './components/Footer/footer'
import Header from './components/header/header'
import News from './components/News/news'
import Portfolio from './components/Portfolio/portfolio'
import Talk from './components/Talk/talk'
import Testimonials from './components/Testimonials/testimonials'
import Nav from './components/Nav/nav'


function app() {
  return (
   <> 
    <Nav/>
    <Header />
    <About/>
    <Portfolio/>
    <Testimonials/>
    <Talk/>
    <News/>
    <Footer/>
     
    
   </>
  )
}

export default app