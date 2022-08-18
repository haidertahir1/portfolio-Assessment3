import React from 'react'
import './about.css'
import Exp from '../../assets/picexp.jpg'
import Tech from '../../assets/tech2.PNG'


const about = () => {
  return (
    <section id='about'>
      
      <div className='about__img'>
      <img src={Exp} alt='exp'/> 
      </div>
      
    <div className="aboutt">
      <h1><b>About Me</b></h1>
      
      <div className='about__container'>
      
      <a href='#home' >About</a>
      <a href='#portfolio' >Skill</a>
      <a href='#services' >Services</a>
      <a href='#talk'>Social Media</a>
      <a href='#award'>Award</a>
      
        </div>
        <div className="about__tech">
        <img src={Tech} alt='exp'></img>
      </div>
        <div className='about__heading'>
          <h1><b>I create products not </b></h1>
           <h1> <b>just art</b></h1>

          </div>
          <div className='about__para'>
          <p >My name is Haider . Ipsum dolor sit amet consectetur adipisicing elit. 
            Delectus molestias nihil eligendi provident doloremque modi quasi,
             enim obcaecati officia iusto ipsa aperiam nobis facilis?
              Iure officiis adipisci maiores ex rem.
              Delectus molestias nihil eligendi provident doloremque modi quasi,
             enim obcaecati.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro assumenda praesentium minima libero alias qui omnis autem esse est vel, dolores nihil, cupiditate officiis saepe error voluptates ducimus delectus maxime.           </p>
             
        </div>
        
      <a href='#talk' className='button'>Lets Talk</a>
      </div>
        
        </section>
     
  )
}

export default about