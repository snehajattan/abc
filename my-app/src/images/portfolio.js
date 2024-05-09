import React from 'react'
import i1 from './i2.png'
import i2 from './i3.png'
import i3 from './i4.png'
import i4 from './i5.png'
import i5 from './i6.png'
import i6 from './i7.png'
export const Portfolio = () => {
  return (
    <>
    <div className='row'>
        <div className='portfolio'><img src={i1} height={330} width={330} /></div>
        <div className='portfolio'><img src={i2} height={330} width={330} /></div>
        <div className='portfolio'><img src={i3} height={330} width={330} /></div>
    </div>
    <div className='row'>
        <div className='portfolio'><img src={i4} height={330} width={330} /></div>
        <div className='portfolio'><img src={i5} height={330} width={330} /></div>
        <div className='portfolio'><img src={i6} height={330} width={330} /></div>
    </div>
    <input type='button' value='View More' className='view'></input>
    </>
  )
}
