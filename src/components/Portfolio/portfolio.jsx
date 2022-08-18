import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
     
      <div className='portfolio'>
        <h1><b>Portfolio</b></h1>
      </div>
     
      <div className='img1'>
      <img src={IMG1} alt='exp'/>
     
      </div>
    

      
      <div className='img2'>
      <img src={IMG2} alt='exp' />
      </div>

        <div className='img3'>
        <img src={IMG3} alt='exp' />
        </div>

      <div className='img4'>
      <img src={IMG4} alt='exp' />
      </div>
      
    </section>

  )
}

export default portfolio