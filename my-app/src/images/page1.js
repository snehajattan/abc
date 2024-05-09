import React from 'react'
import { Navbar } from './Navbar'
import img from './i1.png'
import img1 from './fb.png'
import img2 from './x.png'
import img3 from './in.png'
import img4 from './wa.png'
export const Page1 = () => {
  return (
    <>
    <div className='header'>
      <Navbar/>
      <div className='intro'>
        <p className='intro'>I'M <span className='name'>Ivan Dan</span><br/>
        <span>Python Developer & ERPNext <br />Consultant</span>
        <br/><button className='contact'>Contact Me</button></p>
        <img src={img} height={700} className='img'></img>
        <div className='p1'>
          <div className='line1'></div>
          <img src={img1} height={40}/>
          <img src={img2} height={35}/>
          <img src={img3} height={40}/>
          <img src={img4} height={40}/>
        </div>
      </div>
    </div>
    </>
  )
}
