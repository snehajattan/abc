import React from 'react'
import img from './logo.png'
export const Navbar = () => {
  return (
    <>
    <div className='navb'>
        <img src={img} width={120} />
        <div className='outer'>
          <div className='menu'>About</div>
          <div className='menu'>Portfolio</div>
          <div className='menu'>Contact</div>
        </div>
        <input type='input' className='search' placeholder='Search'/>
      </div>
    
    </>
  )
}
