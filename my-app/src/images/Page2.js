import React from 'react'
import { Skill } from './skill'
import { Portfolio } from './portfolio'

export const Page2 = () => {
  return (
    <>
    <div className='about'>
        <span className='about'>About</span>
        <p className='about'><hr/>I have acquired and sharpened m ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, aliquam nam, impedit aspernatur nesciunt autem sequi perferendis, hic quis iure provident nostrum? Quae, alias at ipsum enim ullam officia.
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, aliquam nam, impedit aspernatur nesciunt autem sequi perferendis, hic quis iure provident nostrum? Quae, alias at ipsum enim ullam adipisicing elit. Incidunt fugit, aliquam nam, sequi perferendis officia.
        </p>
        <div>
          <p className='sk'>My Skills</p>
          <Skill/>
        </div>
        <div className='port'>
          Portfolio
          <Portfolio/>
        </div>
      </div>
    </>
  )
}
