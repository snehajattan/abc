import React from 'react'
import img from './images/logo.png'
export const Navbar = () => {
  return (
    <>
    <div className='navb'>
        <img src={img} width={120} className='logo' />
        <div className='outer'>
          <div className='menu'>About</div>
          <div className='menu1'>Portfolio</div>
          <div className='menu1'>Contact</div>
        </div>
        <input type='input' className='search' placeholder='Search'/>
      </div>
    
    </>
  )
}